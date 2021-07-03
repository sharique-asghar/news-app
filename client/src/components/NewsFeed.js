import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getTopHeadlines } from '../services/news';

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    maxWidth: "100%",
    [theme.breakpoints.up('sm')]: {
      flexGrow: "3"
    }
  },
  feedContainer: {
    marginTop: "0.75rem",
    padding: "10px",
    maxWidth: "100%",
    display: "flex"
  }
}));

function NewsFeed() {
  const classes = useStyles();
  const [country, setCountry] = useState("gb");

  useEffect(() => {
    const getCountryTopHeadlines = async () => {
      try {
        const params = {
          country,
        }
        const result = await getTopHeadlines(params);
        console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCountryTopHeadlines();
  }, [country]);

  return (
    <div className={classes.main}>
      <Typography variant="h6" component="h6">Headlines</Typography>
      <Paper variant="outlined" className={classes.feedContainer}>
        Main
      </Paper>
    </div>
  )
}

export default NewsFeed;
