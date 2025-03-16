import React from "react";
import { useState } from "react";

export default function Square({ value, handleSquareClick }) {
  return (
    <button
      className="square"
      style={{ width: "33px", height: "33px" }}
      onClick={handleSquareClick}
    >
      {value}
    </button>
  );
}
