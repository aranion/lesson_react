import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

ChatInput.propTypes = {
  inputMessage: PropTypes.string.isRequired,
  handleMessageChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
ChatInput.defaultProps = {
  inputMessage: ''
};

export default function ChatInput(props) {
  const { inputMessage, handleMessageChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        placeholder="Введите сообщение"
        value={inputMessage}
        onChange={handleMessageChange}
        required
        label='Сообщение'
        variant='standard'
        autoFocus
      />
      <Button
        type="submit"
        variant='outlined'
      >
        Отправить
      </Button>
    </form>
  )
};