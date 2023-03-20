import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  appbar: {
    backgroundColor: "#128C7E",
  },
  chatHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatTitle: {
    marginLeft: theme.spacing(1),
    fontWeight: "bold",
  },
  messages: {
    flexGrow: 1,
    overflow: "auto",
    padding: theme.spacing(2),
  },
  chatInput: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  sendButton: {
    marginLeft: theme.spacing(2),
  },
}));

const ChatInput = ({ chat }) => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");


  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/chat/${chat.chatId}/messages`);
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [chat]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (newMessage) {
      const messageData = {
        chatId: chat.chatId,
        message: newMessage,
        createdBy: "developer",
      };
      try {
        const response = await axios.post(`http://localhost:8000/chat/${chat.chatId}/messages`, messageData);
        setMessages([...messages, response.data]);
        setNewMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.messages}>
        {messages.map((message) => (
          <div key={message.messageID}>
            <div>{message.message}</div>
            <div>{message.createdBy}</div>
            <div>{message.createdAt}</div>
          </div>
        ))}
      </div>
      <div className={classes.chatInput}>
        <TextField value={newMessage} onChange={handleNewMessageChange} fullWidth />
        <Button variant="contained" color="primary" className={classes.sendButton} onClick={handleSendMessage}>
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
