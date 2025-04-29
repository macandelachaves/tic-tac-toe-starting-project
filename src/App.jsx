import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("O");

  function handleSelectedSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player ">
          <Player
            player="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            player="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectedSquare={handleSelectedSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
