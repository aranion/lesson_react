import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

ChatListForm.propTypes = {
  chatsList: PropTypes.object.isRequired,
  handleAddChat: PropTypes.func.isRequired,
  handleInputAuthor: PropTypes.func.isRequired
}

export default function ChatListForm(props) {
  const { chatsList, handleAddChat, handleInputAuthor } = props;

  return (
    <form onSubmit={handleAddChat}>
      <TextField
        id="standard-basic"
        required
        label='Чат'
        value={chatsList.inputPartner}
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