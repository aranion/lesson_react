import React from 'react';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';

export default function Chats(props) {
  const { chatList, currentChat, messagesChat, setCurrentChat, setChatList, setMessagesChat } = props;
  const [author, setAuthor] = React.useState('');

  const handleChangeChat = (chat) => {
    setCurrentChat(chat);
  }
  const handleDeleteChat = (id) => {
    setChatList((chatList) => {
      return chatList.filter(item => item.id !== id)
    });
    setMessagesChat(messagesChat => (
      delete messagesChat[id]
    ))
  }
  const handleAddChat = (e) => {
    e.preventDefault();
    const nextId = 'id' + (chatList.length + 1);

    setChatList((chatItem) => (
      [
        ...chatItem,
        {
          id: nextId, name: author,
        }
      ]
    ));

    setMessagesChat(messagesChat => (
      {
        ...messagesChat,
        ['chat' + nextId]: []
      }
    ));
  }
  const handleInputAuthor = (e) => {
    setAuthor(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleAddChat}>
        <TextField
          id="standard-basic"
          required
          label='Чат'
          value={author}
          onChange={handleInputAuthor}
          variant='standard'

          fullWidth
          placeholder="Введите сообщение"
        />
        <Button
          type="submit"
          className='form-btn'
          variant='outlined'
        >
          Создать
        </Button>
      </form>
      <List subheader='Список чатов:'>
        {chatList.map((chat) =>
          <Link key={chat.id} to={"/chats/" + chat.id} >
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
              <Button variant='contained' onClick={() => handleDeleteChat(chat.id)}>X</Button>
            </ListItem>
          </Link>
        )}
      </List>
    </div >
  )
}