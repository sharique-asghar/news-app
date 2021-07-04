import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import NewsFeed from './NewsFeed';
import { makeStyles } from '@material-ui/core/styles';
import { sidebarCategoryList } from '../utils/constants';

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
      padding: "0 5%"
    },
    marginTop: "4rem"
  }
}));

export default function NewsFeedLayout({searchValue, newsType}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [category, setCategory] = React.useState("");

  useEffect(() => {
    if (searchValue) {
      setSelectedIndex(null);
      setCategory("");
    }
  }, [searchValue])

  const handleCategoryClick = (event, item) => {
    setSelectedIndex(item.id);
    setCategory(item.value);
    console.log(item);
  };

  return (
    <Container className={classes.root}>
      <div className={classes.pageContent}>
        <Sidebar list={sidebarCategoryList} selectedIndex={selectedIndex} handleCategoryClick={handleCategoryClick} />
        <NewsFeed searchValue={searchValue} newsType={searchValue && newsType} category={category} />
      </div>
    </Container>
  )
}