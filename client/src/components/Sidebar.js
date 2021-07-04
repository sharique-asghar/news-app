import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lists from "../common/ui/Lists";
import { sidebarCategoryList } from '../utils/constants';

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
  const listProps = {
    ...props,
    list: sidebarCategoryList.category,
    title: "Category"
  }
  return (
    <div className={classes.sidebar}>
      <Lists {...listProps} />
    </div>
  )
}

export default Sidebar;
