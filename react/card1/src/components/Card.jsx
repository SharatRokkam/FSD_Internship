import React from "react";
import "./Card.css";

const Card = ({ name, supermessage, theme }) => {
  return (
    <div className={`card ${theme}`}>
      <h1>Hello, {name}</h1>
      <p>{supermessage}</p>
    </div>
  );
};

export default Card;
