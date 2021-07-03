import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ecf0e7",
    margin: "20px"
  },
}));

export default function NewsFeed() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>

    </Container>
  )
}