import React from "react";
import GameDetails from "./GameDetails";
import ScoreEntry from "./ScoreEntry";
import { Game } from "../stores/Game";
import { observer } from "mobx-react";
import GameOverDisplay from "./GameOverDisplay";
import { startingFrames } from "../stores/StartingFrames";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

let currentGame = Game.create();

const startOver = () => {
  currentGame.setFrames(startingFrames);
};

const MainDisplay = () => {
  let history = useHistory();

  const goBack = () => {
    history.push("/projects");
  };
  return (
    <React.Fragment>
      <ScoreEntry currentGame={currentGame} />
      <GameDetails currentGame={currentGame} />
      {currentGame.isGameOver() && (
        <GameOverDisplay currentGame={currentGame} startOver={startOver} />
      )}
      <Button variant="contained" color="primary" onClick={() => goBack()}>
        Back
      </Button>
    </React.Fragment>
  );
};

export default observer(MainDisplay);
