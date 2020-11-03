import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Workout from "./Workout/Workout";
import Bowling from "./Bowling/components/Bowling";
import SocialLinks from "./SocialLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: "25%",
    flexShrink: 0,
    backgroundColor: "#2d2a2a",
  },
  drawerPaper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    webkitBoxPack: "justify",
    webkitJustifyContent: "space - between",
    msFlexPack: "justify",
    justifyContent: "space - between",
    padding: "1rem",
    backgroundColor: "#2d2a2a",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "25%",
  },
}));

function SideDrawer() {
  const classes = useStyles();

  return (
    <Router>
      <div className="sidebar">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className="sidebar-logo">
            <Link to="/" className="logo">
              {"Jennifer Loecker"}
            </Link>
          </div>
          <List className="sidebar-menu">
            <ListItem button>
              <Link to="/" className="menu-links">
                <ListItemText primary={"About"} />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/projects" className="menu-links">
                <ListItemText primary={"Projects"} />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/contact" className="menu-links">
                <ListItemText primary={"Contact"} />
              </Link>
            </ListItem>
          </List>
          <SocialLinks />
        </Drawer>

        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/projects/workout">
            <Workout />
          </Route>
          <Route exact path="/projects/bowling">
            <Bowling />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default SideDrawer;
