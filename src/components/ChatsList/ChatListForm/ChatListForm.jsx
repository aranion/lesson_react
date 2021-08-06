import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddNewChat, changeInputAuthor } from '../../../store/actions/chatsListAction';
import { changeAddChatMessages } from '../../../store/actions/chatsAction';

export default function ChatListForm() {
  const dispatch = useDispatch();
  const { chatsList } = useSelector(state => state);
  const urlHistory = useHistory();

  const generateID = () => {
    const nextId = 'chatid' + (Date.now()).toString();
    return nextId;
  }
  const handleAddChat = (e) => {
    e.preventDefault();

    const nextId = generateID();

    dispatch(changeAddNewChat({ id: nextId, name: chatsList.partner }));
    dispatch(changeAddChatMessages({ nextId }));
    dispatch(changeInputAuthor(''));
    urlHistory.push('/chats/' + nextId);
  }
  const handleInputAuthor = (e) => {
    dispatch(changeInputAuthor(e.target.value));
  }

  return (
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
  )
}