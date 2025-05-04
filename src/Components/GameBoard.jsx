const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectedSquare, turns }) {
  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((playerGame, indexCol) => (
              <li key={indexCol}>
                <button onClick={() => onSelectedSquare(indexRow, indexCol)}>
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
