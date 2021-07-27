import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AUTHOR } from '../App';

export default function Chats(props) {
  // const { chatList } = props;

  const [chatList, setChatList] = React.useState([
    { id: 0, name: AUTHOR.BOT, },
    { id: 1, name: AUTHOR.BOT1, },
    { id: 2, name: AUTHOR.BOT2, },
    { id: 3, name: AUTHOR.BOT3, },
  ]);

  const [currentChat, setCurrentChat] = React.useState(chatList[0]);

  const handleChangeChat = (chat) => {
    setCurrentChat(chat)
  }
  return (
    <div>
      <List subheader='Список чатов:'>
        {/* {chatList.map((chat) => {
          return (
            <ListItem
              button
              key={chat.id}
              selected={chat.id === currentChat.id}
              onClick={() => handleChangeChat(chat)}
            >
              {chat.name}
            </ListItem>
          )
        }
        )} */}
        {chatList.map((chat) =>
          <Link key={chat.id} to={"/chats/id" + chat.id} >
            <ListItem
              button
              key={chat.id}
              selected={chat.id === currentChat.id}
              onClick={() => handleChangeChat(chat)}
            >
              <ListItemAvatar>
                <Avatar alt={chat.name} src="" />
              </ListItemAvatar>
              <ListItemText
                primary={chat.name}
                secondary={
                  <React.Fragment>
                    Text
                  </React.Fragment>
                }
              />
            </ListItem>
          </Link>
        )}
        {/* {chatList.map(chat =>
          <ListItem key={chat.id}  button alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={chat.name} src="" />
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={
                <React.Fragment>
                  {chat.lastMessage}
                </React.Fragment>
              }
            />
          </ListItem>
        )} */}
      </List>
    </div >
  )
}