import React, { useState } from "react";
import PlayerForm from "./components/PlayerForm";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const handleStartGame = (player1, player2) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setGameStarted(true);
  };

  return (
    <div className="App">
      <h1>Two-Player Memory Card Game</h1>
      {gameStarted ? (
        <GameBoard player1={player1} player2={player2} />
      ) : (
        <PlayerForm onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;