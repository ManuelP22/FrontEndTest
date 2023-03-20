import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, IconButton, Box, Toolbar, Typography } from "@material-ui/core";
import { ArrowBack, MoreVert } from "@material-ui/icons";
import ChatInput from "./ChatInput";
import { formatDate } from '../utils/formatDate'
import axios from 'axios'
const prueba = makeStyles((theme) => ({
    messageContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: theme.spacing(2),
    },
    messageBox: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '80%',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    receivedMessageBox: {
      flexDirection: 'row-reverse',
      backgroundColor: theme.palette.primary.light,
      marginLeft: 0,
      marginRight: theme.spacing(4),
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
    receivedAvatar: {
      marginLeft: theme.spacing(2),
    },
    senderName: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.caption.fontSize,
      marginBottom: theme.spacing(0.5),
    },
    messageHour: {
      fontSize: '10px', 
      opacity: 0.4
    }
  }));
const appUser = 'developer'
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function Chat() {
  const { chatId } = useParams();
  const classes = useStyles();
  const [chat, setChat] = useState(null);

  useEffect(() => {
    // Fetch the chat data for the specified chatId from the API
    async function fetchChat() {
      const response = await axios.get(`http://localhost:8000/chat/${chatId}`);
      setChat(response.data);
    }
    if(chatId)
      fetchChat();
    }, [chatId]);
    console.log(chat, 'Patron')
    if (!chat) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Toolbar>
      </Toolbar>
      <ChatMessages chatId={chatId} />
      <ChatInput chatId={chatId} />
    </div>
  );
}

function ChatMessages({ chatId }) {
  const [messages, setMessages] = useState([]);
  const classes = prueba();
  useEffect(() => {
    // Fetch the chat messages for the specified chatId from the API
    async function fetchChatMessages() {
      const response = await axios.get(`http://localhost:8000/chat/${chatId}/messages`);
      const data = await response.data;
      console.log(data)
      setMessages(data);
    }
    if(chatId)
      fetchChatMessages();
  }, [chatId]);

  return (
    <Box>
      {messages.map((message) => (
        <div
          key={message.messageID}
          className={classes.messageContainer}
          style={message.createdBy !== appUser ? { flexDirection: 'row-reverse' } : undefined}
        >
          <Avatar
            alt={message.createdBy}
            src={message.senderAvatar}
            className={message.createdBy !== appUser ? classes.avatar : classes.receivedAvatar}
          />
          <div className={`${classes.messageBox} ${message.createdBy === appUser ? '' : classes.receivedMessageBox}`}>
            <Typography>{message.message}</Typography>
            <div className={`${classes.messageHour}`} style={message.createdBy === appUser ? {marginLeft: '5px'} : {marginRight: '5px'}}>{formatDate(new Date(message.createdAt), 'mm:hh dd-MM-yy')}</div>
          </div>
        </div>
      ))}
    </Box>
  );
}

export default Chat;
