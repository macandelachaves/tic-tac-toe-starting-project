import Player from "./Components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player player="Player 1" symbol="X" />
          <Player player="Player 2" symbol="0" />
        </ol>
      </div>
    </main>
  );
}

export default App;
