import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import Chats from './components/Chats';

export const AUTHOR = {
  ME: 'Me',
  BOT: 'Bot',
  BOT1: 'Bot1',
  BOT2: 'Bot2',
  BOT3: 'Bot3',
}

function App(props) {
  // const {chatId} = props;
  

  return (
    <div className="App">
      <div className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React - Lesson 4</h2>
        </header>
        <div className='wrapper-content'>
          <div className="content-flex">
            <Chats />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
