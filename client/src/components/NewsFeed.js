import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import UiSkelton from '../common/ui/Skelton';
import { makeStyles } from '@material-ui/core/styles';
import { getTopHeadlines } from '../services/news';
import NewsCard from './NewsCard';

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    maxWidth: "100%",
    [theme.breakpoints.up('sm')]: {
      flexGrow: "3",
      maxWidth: "75%"
    }
  },
  feedContainer: {
    marginTop: "0.75rem",
  }
}));

function NewsFeed() {
  const classes = useStyles();
  const [country, setCountry] = useState("gb");
  const [showSkelton, setShowSkelton] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    const getCountryTopHeadlines = async () => {
      try {
        const params = {
          country,
        }
        const result = await getTopHeadlines(params);
        console.log(result);
        setData(result.articles);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCountryTopHeadlines();
  }, [country]);

  return (
    <div className={classes.main}>
      <Typography variant="h6" component="h6">Headlines</Typography>
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
      {showSkelton &&
        <UiSkelton
          type={showSkelton}
        />
      }
    </div>
  )
}

export default NewsFeed;
