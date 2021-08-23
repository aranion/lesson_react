import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat/Chat';
import ChatList from './components/ChatList/ChatList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React - Lesson 10</h2>
        </header>
        <div className='wrapper-content'>
          <div className="content-flex">
            <ChatList />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
