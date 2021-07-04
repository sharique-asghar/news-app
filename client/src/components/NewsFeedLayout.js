import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import NewsFeed from './NewsFeed';
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
    boxSizing: "border-box"
  },
  pageContent: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "flex-start",
    columnGap: "1rem",
    [theme.breakpoints.up('sm')]: {
      justifyContent: "space-between",
      padding: "0 5%"
    },
    marginTop: "4rem"
  }
}));

export default function NewsFeedLayout({searchValue, newsType}) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.pageContent}>
        <Sidebar />
        <NewsFeed searchValue={searchValue} newsType={searchValue && newsType} />
      </div>
    </Container>
  )
}