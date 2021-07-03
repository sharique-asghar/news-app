import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ecf0e7",
    padding: "10px",
    [theme.breakpoints.up('sm')]: {
      padding: "2rem"
    },
    boxSizing: "border-box"
  },
  sidebar: {
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      flexGrow: "1"
    }
  },
}));

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      Sidebar
    </div>
  )
}

export default Sidebar;
