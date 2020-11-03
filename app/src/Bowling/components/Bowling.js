import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainDisplay from "./MainDisplay";

const useStyles = makeStyles((theme) => ({
  bowling: {
    fontSize: "1.2rem",
    padding: theme.spacing(2),
    marginLeft: "26%",
    paddingTop: theme.spacing(20),
  },
}));

const Bowling = () => {
  const classes = useStyles();
  return (
    <div className={classes.bowling}>
      <MainDisplay />
    </div>
  );
};

export default Bowling;
