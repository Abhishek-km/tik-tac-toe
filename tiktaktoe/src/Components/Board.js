import React from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquares = squares.slice();

    if (xIsNext == true) {
      newSquares[i] = "X";
      setXIsNext(false);
    } else {
      newSquares[i] = "O";
      setXIsNext(true);
    }
    setSquares(newSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} handleSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} handleSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} handleSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} handleSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} handleSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} handleSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
