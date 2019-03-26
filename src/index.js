import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./components/Header";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />

      {/* Players List*/}
      <Player name={"React F"} score={35} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
