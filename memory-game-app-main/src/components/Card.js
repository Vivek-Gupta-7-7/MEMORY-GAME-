import React from "react";
import "./Card.css";

const Card = ({ value, flipped, onClick, matched }) => {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""} ${matched ? "matched" : ""}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front">{value}</div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

export default Card;
