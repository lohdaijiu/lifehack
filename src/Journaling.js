import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from './Typography';
import { TextField, Button } from '@material-ui/core';
import AppBar from "./Home";
import { yellow } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(25),
    marginRight: theme.spacing(0),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: yellow[200],
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  card2: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/JournalImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function Journal(props) {
  const { classes } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container className={classes.root} component="section">
        <AppBar/>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Journaling
              </Typography>
              <Typography variant="h5">
                How well did you do today?
              </Typography>
              <TextField noBorder className={classes.textField} placeholder="Journal" />
              <Button type="submit" color="primary" variant="contained" className={classes.button} href="/">
                Update
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

Journal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Journal);