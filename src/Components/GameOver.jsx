export default function ({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>
        {winner && <p> {winner} congrats, you win!</p>}
        {!winner && <p>You has a Draw!</p>}
        <p>
          <button onClick={onRestart}>Rematch! </button>
        </p>
      </h2>
    </div>
  );
}
