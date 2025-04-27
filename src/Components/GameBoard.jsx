import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleGameClick(indexRow, indexCol) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[indexRow][indexCol] = "X ";
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((playerGame, indexCol) => (
              <button
                onClick={() => handleGameClick(indexRow, indexCol)}
                key={indexCol}
              >
                {playerGame}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
