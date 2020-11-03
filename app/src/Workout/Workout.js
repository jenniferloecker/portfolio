import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainDisplay from "./MainDisplay";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  workout: {
    fontSize: "1.2rem",
    padding: theme.spacing(1),
    marginLeft: "26%",
    paddingTop: theme.spacing(20),
  },
}));

const Workout = () => {
  let history = useHistory();
  const goBack = () => {
    history.push("/projects");
  };
  const classes = useStyles();
  return (
    <div className={classes.workout}>
      <MainDisplay />
      <Button variant="contained" color="primary" onClick={() => goBack()}>
        Back
      </Button>
    </div>
  );
};

export default Workout;
