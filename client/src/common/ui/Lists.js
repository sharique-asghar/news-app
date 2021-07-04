import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listTitle: {
    display: "flex",
    padding: "10px"
  }
}));

export default function SelectedListItem({list, selectedIndex, handleCategoryClick}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h6" className={classes.listTitle}>Category</Typography>
      <Divider />
      {list?.category?.length ? 
        list.category.map((item) => (
          <List component="nav" aria-label="list" key={item.id}>
            <ListItem
              button
              selected={selectedIndex === item.id}
              onClick={(event) => handleCategoryClick(event, item)}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          </List>
        ))
        :
        null
      }
    </div>
  );
}
