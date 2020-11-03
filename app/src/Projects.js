import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Paper, ListItemText, ListItem } from "@material-ui/core";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contact: {
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

const Projects = () => {
  const classes = useStyles();
  let history = useHistory();

  function handleClick(linkName) {
    if (linkName === "bowling") {
      history.push("/projects/bowling");
    } else if (linkName === "workout") {
      history.push("/projects/workout");
    }
  }
  return (
    <Router>
      <div className={classes.contact}>
        <Paper className={classes.paper}>
          Here's some examples of my work:
          <List>
            <ListItem className={classes.paper}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClick("bowling")}
              >
                Bowling
              </Button>
            </ListItem>
            <ListItem className={classes.paper}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClick("workout")}
              >
                Workout Averages
              </Button>
            </ListItem>
          </List>
        </Paper>
      </div>
    </Router>
  );
};

export default Projects;
