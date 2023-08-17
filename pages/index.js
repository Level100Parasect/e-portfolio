import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="md">
        {/* Use Typography component for your text */}
        <Typography variant="h1" align="center" gutterBottom>
          Hello, this is still in progress
        </Typography>

        <Typography variant="body1" align="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          risus nec quam commodo euismod. In vitae libero ac libero sollicitudin
          rhoncus non et lectus. Pellentesque ultrices aliquet odio, eu
          scelerisque justo egestas vel. Fusce vestibulum, lectus nec auctor
          elementum, nulla neque tristique arcu, eget consequat erat nulla eu
          purus. Sed lacinia sem in sapien consequat, a egestas erat facilisis.
          Aliquam erat volutpat.
        </Typography>
      </Container>
      <Button variant="contained" color="primary">
        See Work
      </Button>
      <Footer />
    </div>
  );
};

export default HomePage;