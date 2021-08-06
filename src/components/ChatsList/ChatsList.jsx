import React from 'react';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddNewChat, changeInputAuthor } from '../../store/actions/chatsListAction';
import { changeAddChatMessages, changeDeleteChat } from '../../store/actions/chatsAction';

export default function Chats(props) {

  const dispatch = useDispatch();
  const { chatsList } = useSelector(state => state);
  const { chatId } = useParams();
  // const { chatList, currentChat, setCurrentChat, setChatList, setMessagesChat } = props;
  // const [author, setAuthor] = React.useState('');

  const handleChangeChat = (chat) => {
    // setCurrentChat(chat);
  }
  const handleDeleteChat = (id) => {
    dispatch(changeDeleteChat(id))
    // setChatList((chatsList) => {
    //   return chatsList.filter(item => item.id !== id)
    // });
    // setMessagesChat(messagesChat => (
    //   delete messagesChat[id]
    // ))
  }
  const handleAddChat = (e) => {
    e.preventDefault();

    const nextId = 'chatid' + (chatsList.items.length + 1).toString();

    dispatch(changeAddNewChat({
      id: nextId, name: chatsList.partner,
    }))
    dispatch(changeAddChatMessages({
      nextId
    }))


    // setChatList((chatItem) => (
    //   [
    //     ...chatItem,
    //     {
    //       id: nextId, name: author,
    //     }
    //   ]
    // ));

    // setMessagesChat(messagesChat => (
    //   {
    //     ...messagesChat,
    //     ['chat' + nextId]: []
    //   }
    // ));

    // setAuthor('');
  }
  const handleInputAuthor = (e) => {
    dispatch(changeInputAuthor(e.target.value));
  }

  return (
    <div>
      <form onSubmit={handleAddChat}>
        <TextField
          id="standard-basic"
          required
          label='Чат'
          value={chatsList.partner}
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
        {chatsList.items.map((chat) =>
          <Link key={chat.id} to={"/chats/" + chat.id} >
            <ListItem
              button
              key={chat.id}
              selected={chat.id === chatId}
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