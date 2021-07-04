import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lists from "../common/ui/Lists";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      flexGrow: "1"
    },
    height: "auto"
  },
}));



function Sidebar(props) {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Lists {...props} />
    </div>
  )
}

export default Sidebar;
