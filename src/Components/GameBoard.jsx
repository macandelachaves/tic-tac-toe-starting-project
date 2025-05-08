export default function GameBoard({ onSelectedSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((playerGame, indexCol) => (
              <li key={indexCol}>
                <button
                  onClick={() => onSelectedSquare(indexRow, indexCol)}
                  disabled={playerGame !== null}
                >
                  {playerGame}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
