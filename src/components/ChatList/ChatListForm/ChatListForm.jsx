import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

ChatListForm.propTypes = {
  chatList: PropTypes.object.isRequired,
  handleAddChat: PropTypes.func.isRequired,
  handleInputAuthor: PropTypes.func.isRequired
}

export default function ChatListForm(props) {
  const { chatList, handleAddChat, handleInputAuthor } = props;

  return (
    <form onSubmit={handleAddChat}>
      <TextField
        id="standard-basic"
        required
        label='Чат'
        value={chatList.inputPartner}
        onChange={handleInputAuthor}
        variant='standard'
        fullWidth
        placeholder="Введите сообщение"
      />
      <Button type="submit" variant='outlined' >
        Создать
      </Button>
    </form>
  )
}