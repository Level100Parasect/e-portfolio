import React from 'react';
import { AppBar, Tabs, Tab, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Typography variant="h6" className={classes.title}>
        Louis Arcilla - Senior Full-Stack Developer
      </Typography>
      <Tabs aria-label="navigation tabs">
        <Tab label="Home" href="/" />
        <Tab label="Resume" href="/resume" />
        <Tab label="My Work" href="/projects" />
        <Tab label="My Music" href="/music" />
        <Tab label="Contact" href="/contact" />
      </Tabs>
    </AppBar>
  );
};

export default Header;