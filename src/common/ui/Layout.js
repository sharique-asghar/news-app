import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ecf0e7",
    padding: "10px",
    [theme.breakpoints.up('sm')]: {
      padding: "2rem"
    },
    maxWidth: "100%",
    minHeight: "100vh",
    boxSizing: "border-box"
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {props.children}
    </Container>
  )
}

export default Layout;
