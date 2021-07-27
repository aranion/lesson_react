import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function ChatInput(props) {
  const [inputValue, setInputValue] = React.useState('');

  const { onSubmit, } = props;

  const handleMessageChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(inputValue);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        placeholder="Введите сообщение"
        value={inputValue}
        onChange={handleMessageChange}
        className='form-input form-input-text'
        required
        label='Сообщение'
        variant='standard'
        autoFocus
      />
      <Button
        type="submit"
        className='form-btn'
        variant='outlined'
      >
        Отправить
      </Button>
    </form>
  )
};