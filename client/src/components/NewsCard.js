import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import { timeSince } from '../utils/functions';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "16px",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  titleAndImageContainer: {
    display: "flex",
    columnGap: "12px",
    maxWidth: "100%",
    boxSizing: "border-box"
  },
  titleAndSourceContainer: {
    maxWidth: "70%",
    flexGrow: "3",
    [theme.breakpoints.up('sm')]: {
      maxWidth: "80%",
    },
  },
  title: {
    fontSize: "0.9rem",
    lineHeight: 1.4,
    fontWeight: "bold",
    textDecoration: "none",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.125rem"
    },
    color: "#000",
    '&:hover': {
      textDecoration: "underline",
    },
  },
  imageContainer: {
    flexGrow: "1",
    borderRadius: "8px",
    width: "80px",
    height: "80px",
  },
  newsImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  breadcrumbs: {
    fontSize: "0.75rem",
  },
  description: {
    fontSize: "0.875rem",
    margin: "10px 0"
  }
}));

function NewsCard({article}) {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.card}>
      <div className={classes.titleAndImageContainer}>
        <div className={classes.titleAndSourceContainer}>
          <a href={article.url} className={classes.title} target="_blank" rel="noreferrer">
            {article.title}
          </a>
          <div className={classes.description}>
            {article.description}
          </div>
          <Breadcrumbs separator="|" aria-label="breadcrumb" className={classes.breadcrumbs}>
            <span>{article.source.name}</span>
            <span>{timeSince(new Date(article.publishedAt))}</span>
          </Breadcrumbs>
        </div>
        <a href={article.url} className={classes.imageContainer} target="_blank" rel="noreferrer">
          <img src={article.urlToImage || "./newsfeed.png"} className={classes.newsImage} alt="newsImage" />
        </a>
      </div>
    </Paper>
  )
}

export default NewsCard;
