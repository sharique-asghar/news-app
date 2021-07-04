import React, { useEffect, useState } from 'react';
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
    minHeight: "100vh",
    boxSizing: "border-box"
  },
  pageContent: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "flex-start",
    columnGap: "1rem",
    [theme.breakpoints.up('sm')]: {
      justifyContent: "space-between",
      padding: "0 5% 0 0"
    },
    marginTop: "4rem"
  }
}));

export default function NewsFeedLayout({searchValue}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [category, setCategory] = useState("");
  const [newsType, setNewsType] = useState((searchValue && "anything") || "")

  useEffect(() => {
    if (searchValue) {
      setSelectedIndex(null);
      setCategory("");
      setNewsType("anything");
    }
  }, [searchValue])

  const handleCategoryClick = (event, item) => {
    setSelectedIndex(item.id);
    setCategory(item.value);
    setNewsType("category");
  };

  return (
    <Container className={classes.root}>
      <div className={classes.pageContent}>
        <Sidebar selectedIndex={selectedIndex} handleCategoryClick={handleCategoryClick} />
        <NewsFeed searchValue={searchValue} newsType={newsType} category={category} />
      </div>
    </Container>
  )
}