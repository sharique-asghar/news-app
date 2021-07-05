import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../common/ui/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "80%",
    maxHeight: "auto"
  }
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <img src="./notFound.png" className={classes.image} alt="Not Found" />
      </div>
    </Layout>
  )
}

export default NotFound
