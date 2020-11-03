import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about: {
    fontSize: "1.2rem",
    padding: theme.spacing(3),
    marginLeft: "30%",
    marginRight: theme.spacing(2),
    paddingTop: theme.spacing(20),
  },
  paper: {
    justifyContent: "center",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Paper className={classes.paper}>
        Hi! Myname is Jennifer Loecker. Welcome to my portfolio! I'm a
        React/React Native/iOS developer open to new opportunities. Have a look
        around at some of my past work and don't hesitate to contact me! Thanks!
      </Paper>
    </div>
  );
};

export default About;
