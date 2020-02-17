import React from "react";
import "./Score.css";
// import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const Score = props => (
  <div id="scoreBoard">
    <h3 id="score">Your Score: {props.total}</h3>
    <h3 id="gameStatus">{props.status}</h3>
  </div>
);

export default Score;