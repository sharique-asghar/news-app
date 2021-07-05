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
    [theme.breakpoints.up('md')]: {
      justifyContent: "space-between",
      padding: "0 10% 0 0",
      columnGap: "1rem",
    },
    marginTop: "4rem"
  }
}));

export default function NewsFeedLayout(props) {
  const classes = useStyles();
  const { searchValue, handleValueToSearch } = props;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [category, setCategory] = useState("");
  const [newsType, setNewsType] = useState("headline");

  // avoid double api call after calling api with category and then searching
  if (newsType === "category" && searchValue) {
    setNewsType("");
  }

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
    handleValueToSearch("");
  };

  const sidebarProps = {
    ...props,
    selectedIndex,
    handleCategoryClick
  }

  const newsProps = {
    ...props,
    newsType,
    category
  };

  return (
    <Container className={classes.root}>
      <div className={classes.pageContent}>
        <Sidebar {...sidebarProps} />
        <NewsFeed {...newsProps} />
      </div>
    </Container>
  )
}