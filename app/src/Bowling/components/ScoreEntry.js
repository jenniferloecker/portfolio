import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "50%",
  },
}));

const ScoreEntry = ({ currentGame }) => {
  const [newValue, setNewValue] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const classes = useStyles();
  const handleSubmit = (event) => {
    let rollMax = currentGame.nextRollMax();
    event.preventDefault();
    if (newValue <= rollMax && newValue >= 0) {
      setErrorText("");
      setError(false);
      currentGame.addNewScore(Number(newValue));
    } else {
      setErrorText(
        "Next roll must be equal or less than " +
          rollMax +
          " and greater than 0"
      );
      setError(true);
    }
    setNewValue("");
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        error={error}
        helperText={errorText}
        className={classes.textField}
        type="number"
        label="Enter the next roll score:"
        value={newValue}
        onInput={(e) => setNewValue(e.target.value)}
      />
    </form>
  );
};

export default observer(ScoreEntry);
