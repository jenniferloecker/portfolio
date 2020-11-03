import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const GameOverDisplay = ({ currentGame, startOver }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>Final Score: {currentGame.finalScore()}</div>
      <Button variant="contained" color="primary" onClick={startOver}>
        Start Over
      </Button>
    </div>
  );
};

export default GameOverDisplay;
