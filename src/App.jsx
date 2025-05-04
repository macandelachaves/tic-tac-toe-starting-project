import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("O");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectedSquare(indexRow, indexCol) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = "x";
      if (prevTurns.length > 0 && prevTurns[0].player === "x") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: indexRow, col: indexCol }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
        <GameBoard onSelectedSquare={handleSelectedSquare} turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
