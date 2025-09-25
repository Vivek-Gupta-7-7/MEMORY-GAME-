import React, { useState } from "react";
import "./PlayerForm.css";

const PlayerForm = ({ onStartGame }) => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (player1.trim() && player2.trim()) {
            onStartGame(player1, player2);
            setError("");
        } else {
            setError("Please enter both player names!");
        }
    };

    return (
        <div className="player-form">
            <h2>Enter Player Names</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="player1">Player 1:</label>
                    <input
                        id="player1"
                        type="text"
                        placeholder="Player 1 Name"
                        value={player1}
                        onChange={(e) => setPlayer1(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="player2">Player 2:</label>
                    <input
                        id="player2"
                        type="text"
                        placeholder="Player 2 Name"
                        value={player2}
                        onChange={(e) => setPlayer2(e.target.value)}
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Start Game</button>
            </form>
        </div>
    );
};

export default PlayerForm;