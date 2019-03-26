import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./components/Header";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />

      <Player name={"Brandi"} score={35} />
      <Player name={"Sonnet"} score={90} />
      <Player name={"Cadence"} score={90} />
      <Player name={"Jeffery"} score={90} />
      <Player name={"Riley"} score={90} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
