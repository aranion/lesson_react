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

function App() {
  const [messagesChat, setMessagesChat] = React.useState({
    chatid0: [{
      id: 0,
      author: 'Bot',
      text: 'Тест'
    }],
    chatid1: [
      {
        id: 0,
        author: 'Bot',
        text: 'Тест'
      }
    ],
    chatid2: [
      {
      id: 0,
      author: 'Me',
      text: 'Тестовое сообщение'
    }],
    chatid3: [
      {
      id: 0,
      author: 'Me',
      text: 'Тестовое сообщение'
    }]
  });
  const [chatList, setChatList] = React.useState([
    { id: "id0", name: AUTHOR.BOT, },
    { id: "id1", name: AUTHOR.BOT1, },
    { id: "id2", name: AUTHOR.BOT2, },
    { id: "id3", name: AUTHOR.BOT3, },
  ]);
  const [currentChat, setCurrentChat] = React.useState(chatList[0]);

  return (
    <div className="App">
      <div className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React - Lesson 4</h2>
        </header>
        <div className='wrapper-content'>
          <div className="content-flex">
            <Chats 
              chatList={chatList} 
              currentChat={currentChat} 
              messagesChat={messagesChat}
              setCurrentChat={setCurrentChat}
              setChatList={setChatList}
              setMessagesChat={setMessagesChat}
            />
            <Chat 
              messagesChat={messagesChat} 
              setMessagesChat={setMessagesChat} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
