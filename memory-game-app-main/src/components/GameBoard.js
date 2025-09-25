import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./GameBoard.css";

const GameBoard = ({ player1, player2 }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  // Initialize the cards
  useEffect(() => {
    const values = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
    const doubledValues = [...values, ...values];
    setCards(doubledValues.sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || matched.includes(index)) return;

    setFlipped([...flipped, index]);

    if (flipped.length === 1) {
      const firstIndex = flipped[0];
      if (cards[firstIndex] === cards[index]) {
        setMatched([...matched, firstIndex, index]);

        // Update the current player's score
        setScores((prevScores) => ({
          ...prevScores,
          [`player${currentPlayer}`]: prevScores[`player${currentPlayer}`] + 1,
        }));
      } else {
        // Switch to the other player
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }

      setMoves(moves + 1);
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  // Check for win
  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      const winner =
        scores.player1 > scores.player2
          ? player1
          : scores.player2 > scores.player1
          ? player2
          : "It's a tie!";
      alert(`Game Over! ${winner} wins!`);
    }
  }, [matched]);

  return (
    <div className="game-board">
      <div className="scores">
        <div>{player1}: {scores.player1}</div>
        <div>{player2}: {scores.player2}</div>
      </div>
      <div className="moves">Moves: {moves}</div>
      <div className="current-player">Current Player: {currentPlayer === 1 ? player1 : player2}</div>
      <div className="cards">
        {cards.map((value, index) => (
          <Card
            key={index}
            value={value}
            flipped={flipped.includes(index)}
            matched={matched.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
