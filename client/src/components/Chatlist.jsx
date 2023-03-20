import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Chat from './Chat';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const ChatList = () => {
  const navigate = useNavigate()
  const classes = useStyles();
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/chats');
      setChats(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <List className={classes.root}>
        {chats.map((chat) => (
          <ListItem
            key={chat.chatId}
            alignItems="flex-start"
            button
            onClick={() => navigate(`/chat/${chat.chatId}`)}
          >
            <ListItemAvatar>
              <Avatar alt={chat.destinaraty} src={`/static/images/avatar/${chat.destinaraty}.jpg`} />
            </ListItemAvatar>
            <ListItemText
              primary={chat.destinaraty}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                  </Typography>
                  {` — ${new Date(chat.lastMessage).toLocaleString()}`}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      {selectedChatId && <Chat chatId={selectedChatId} />}
    </div>
  );
};

export default ChatList;

