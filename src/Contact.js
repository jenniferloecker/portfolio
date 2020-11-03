import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

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

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Paper className={classes.paper}>
        Get in touch through my contact info or through any social media
        <div>Jennifer Loecker</div>
        <div>Lincoln Nebraska</div>
        <div>(402)430-3537</div>
        <div>jenniferloecker@gmail.com</div>
      </Paper>
    </div>
  );
};

export default ContactPage;
