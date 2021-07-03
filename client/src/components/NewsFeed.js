import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100%",
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      flexGrow: "3"
    }
  }
}));

function NewsFeed() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      Main
    </div>
  )
}

export default NewsFeed;
