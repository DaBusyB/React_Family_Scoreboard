import React from "react";

import "../styles.css";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.score}</span>
    </header>
  );
};

export default Header;
