import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

function ChatAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar position="top" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton IconButton edge="start" color="inherit" aria-label="back" onClick={() => navigate('/')}>
          <ArrowBack />
        </IconButton>
        <Avatar alt="Profile Picture" src="path/to/profile-picture.jpg" className={classes.avatar}/>
        <div className={classes.grow} />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ChatAppBar;
