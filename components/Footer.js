import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Link } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(3),
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className={classes.column}>
          <Typography variant="h6">Contact</Typography>
          <Typography>Email: arcilla_L@yahoo.com</Typography>
          <Typography>Phone: (XXX) XXX-XXXX</Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.column}>
          <Typography variant="h6">Social Media</Typography>
          <Link href="https://google.com" color="inherit">LinkedIn</Link>
          <Link href="https://google.com" color="inherit">Facebook</Link>
          <Link href="https://google.com" color="inherit">Instagram</Link>
          <Link href="https://google.com" color="inherit">SoundCloud</Link>
          <Link href="https://google.com" color="inherit">LinkTree</Link>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.column}>
          <Typography variant="h6">Copyright</Typography>
          <Typography>&copy; {new Date().getFullYear()} Louis Arcilla. All rights reserved.</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
