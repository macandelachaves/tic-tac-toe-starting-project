const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((playerGame, indexCol) => (
              <button key={indexCol}>{playerGame}</button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
