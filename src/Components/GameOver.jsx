export default function ({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2> GAME OVER! </h2>
      {winner && (
        <p>
          {" "}
          {winner}, <br /> YOU WIN!
        </p>
      )}
      {!winner && <p>You has a Draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch! </button>
      </p>
    </div>
  );
}
