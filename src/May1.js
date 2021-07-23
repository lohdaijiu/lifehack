import Todo from "./May";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from './Typography';
import Button from '@material-ui/core/Button';
import AppBar from './Home'

const styles = (theme) => ({
    root: {
      display: 'flex',
      overflow: 'hidden',
    },
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

function HomePage(props) { 
    const { classes } = props;

    return (
  
      <section className={classes.root}>
                <AppBar />
        <Container className={classes.container}>
          <Todo/>
        </Container>
      </section>
    );
  }

  export default withStyles(styles)(HomePage);