import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Lists from "../common/ui/Lists";
import { sidebarCategoryList } from '../utils/constants';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: "none",
    [theme.breakpoints.up('md')]: {
      display: "flex",
      flexGrow: "1",
      position: "fixed",
      left: "2rem",
      top: "6rem",
      width: "20%"
    },
    height: "100vh"
  },
  listClass: {
    borderRadius: "8px"
  },
  drawer: {
    width: "250px",
    [theme.breakpoints.up('md')]: {
      display: "none"
    },
  }
}));

function Sidebar(props) {
  const classes = useStyles();
  const { isSidebarOpen, handleSidebarOpening } = props;

  const listProps = {
    ...props,
    list: sidebarCategoryList.category,
    title: "Category",
    className: !isSidebarOpen ? classes.listClass : classes.drawer
  }

  return (
    <>
    <div className={classes.sidebar}>
      <Lists {...listProps} />
    </div>
    <div 
      role="presentation"
      onClick={(e) => handleSidebarOpening(e, false)}
      onKeyDown={(e) => handleSidebarOpening(e, false)}
    >
      <Drawer 
        open={isSidebarOpen} 
        onClose={(e) => handleSidebarOpening(e, false)}
      >
        <Lists {...listProps} />
      </Drawer>
    </div>
    </>
  )
}

export default Sidebar;
