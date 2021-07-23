import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "./Home";


const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    align: "center",
    padding:theme.spacing(20),
  },
  ton: {
    margin: theme.spacing(3),    
  },
});

function NoChat(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar />
      
        <Container className={classes.root} component="section">
          <Typography align="center" color="textPrimary" variant="h2">
            Need Help? Need to speak with someone?
          </Typography>
          <br></br>
          <Button className ={classes.ton} href="https://www.reddit.com/r/singapore/comments/maajuo/a_compilation_of_mental_healthwellness_resources/?utm_source=share&utm_medium=ios_app&utm_name=iossmf"
          color="secondary" variant="contained">
            Click Here
          </Button>
          <br></br>
        </Container>
    </div>
  );
}

NoChat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoChat);