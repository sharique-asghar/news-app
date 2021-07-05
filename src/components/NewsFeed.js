import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import UiSkelton from '../common/ui/Skelton';
import { makeStyles } from '@material-ui/core/styles';
import { getAnyNews, getTopHeadlines } from '../services/news';
import NewsCard from './NewsCard';
import Toast from '../common/ui/Toast';

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    maxWidth: "100%",
    [theme.breakpoints.up('md')]: {
      flexGrow: "3",
      maxWidth: "75%"
    }
  },
  feedContainer: {
    marginTop: "0.75rem",
  },
  title: {
    textTransform: "capitalize"
  },
  searchTitle: {
    color: "#333"
  }
}));

function NewsFeed(props) {
  const classes = useStyles();
  const [country] = useState("gb");
  const [showSkelton, setShowSkelton] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Top Headlines");
  const newsType = props.newsType;

  useEffect(() => {
    const getCountryTopHeadlines = async () => {
      try {
        setShowSkelton(true);
        const params = { country }
        if (props.category) {
          params.category = props.category;
          setTitle(props.category)
        }
        const result = await getTopHeadlines(params);
        setData(result.articles);
      } catch (err) {
        Toast(err.message, "error");
        console.log(err.message);
      } finally {
        setShowSkelton(false);
      }
    };

    const getEveryNews = async () => {
      try {
        setShowSkelton(true);
        const params = {
          q: props.searchValue,
        }
        const result = await getAnyNews(params);
        setData(result.articles);
      } catch (err) {
        Toast(err.message, "error");
        console.log(err.message);
      } finally {
        setShowSkelton(false);
      }
    }

    if (newsType === "headline" || newsType === "category") {
      getCountryTopHeadlines();
    } else if (newsType === "anything" && props.searchValue) {
      setTitle(props.searchValue);
      getEveryNews();
    }
  }, [country, newsType, props.category, props.searchValue]);

  return (
    <div className={classes.main}>
      {!showSkelton &&
        <>
          <Typography variant="h6" component="h6" className={classes.title}>
            {newsType === "anything" && <span className={classes.searchTitle}>Search Value: {" "}</span>}
            <span>{title}</span>
          </Typography>
          <div className={classes.feedContainer}>
            {data?.length ? data.map((article) => (
              <NewsCard article={article} key={article.title} />
            ))
            :
            <div>
              Sorry, we weren't able to load your feed. Refresh, to try again.
            </div>
          }
          </div>
        </>
      }
      {showSkelton &&
        <UiSkelton
          type={showSkelton}
        />
      }
    </div>
  )
}

export default NewsFeed;
