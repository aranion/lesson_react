import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import TextField from '@material-ui/core/TextField';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const AUTHOR = {
  ME: 'Me',
  BOT: 'Bot',
  BOT1: 'Bot1',
  BOT2: 'Bot2',
  BOT3: 'Bot3',
}

function App() {
  const [messageList, setMessageList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [chatList, setChatList] = React.useState([
    {id:1, name:AUTHOR.BOT, lastMessage: 'message'},
    {id:2, name:AUTHOR.BOT1, lastMessage: 'message'},
    {id:3, name:AUTHOR.BOT2, lastMessage: 'message'},
    {id:4, name:AUTHOR.BOT3, lastMessage: 'message'},
  ]);

  React.useEffect(() => {
    if( messageList.length &&  messageList[messageList.length-1].author !== AUTHOR.BOT) {
      setTimeout( () => {
        setMessageList(currentMessageList => (
          [...currentMessageList, 
            { 
              id: messageList.length + 1, 
              text: "Привет!", 
              author: AUTHOR.BOT 
            }
          ]
        ))
      }, 1500)
    }
  }, [messageList])

  const handleMessageChange = (e) => {
    setInputValue(e.target.value);
  } 

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if( inputValue !== '' ) {
      setMessageList(currentMessageList => (
      [...currentMessageList, 
        { 
          id: messageList.length + 1, 
          text: inputValue, 
          author: AUTHOR.ME 
        }
      ]
    ));
    setInputValue('');
    } else alert('Заполните поле текста');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='wrapper-content'>
          <h2>React - Lesson 3</h2>
          <div className="content-flex">
            <div>
              <Typography variant="h6" component="h6">Список чатов:</Typography>
            { chatList.map(chat => <List key={chat.id}>
                <ListItem button alignItems="flex-start">
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
              </List>
            ) }
              
            </div>
            <div>
            <form action="#">
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
              <button 
                type="submit" 
                className='form-btn'
                onClick={handleMessageSubmit}
              >
                Отправить
              </button>
            </form>
            { messageList.map(m => <Message key={m.id} message={m} />) }
            </div>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
