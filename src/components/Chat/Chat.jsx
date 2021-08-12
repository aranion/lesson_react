import React from 'react';
import './chat.css';
import { useParams } from 'react-router-dom';
import Message from './Message/Message';
import ChatInput from './ChatInput/ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputMessage, changeAddMessageBot } from '../../store/actions/chatsAction';
import firebase from 'firebase';

const Chat = () => {
  const dispatch = useDispatch();
  const { chatsList, chats } = useSelector(state => state);
  const { chatId } = useParams();
  const db = firebase.database();

  const handleMessageSubmit = (newMessageText) => {
    const newMessage = {
      id: (Date.now()).toString(),
      text: newMessageText,
      author: 'ME'
    };

    db.ref('messages').child(chatId).push(newMessage);

    dispatch(changeAddMessageBot({
      chatId,
      newMessage
    }));
  };
  const handleMessageChange = (e) => {
    dispatch(changeInputMessage(e.target.value));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleMessageSubmit) {
      handleMessageSubmit(chats.inputMessage);
      dispatch(changeInputMessage(''));
    }
  }
  return (
    <div>
      {chatId && Object.keys(chats.items).indexOf(chatId) !== -1
        ? <ChatInput
          inputMessage={chats.inputMessage}
          handleMessageChange={handleMessageChange}
          handleSubmit={handleSubmit}
        />
        : 'Выберите чат'}
      {chats.items[chatId]?.map(m => <Message key={m.id} message={m} />)}
      {chatId && chats.isVisiblePrint
        ? <div className='chat-process-print'>
          <div className="loading">
            {chatsList.items.find(el => el.id === chatId)?.name}
            : печатает...
          </div>
        </div>
        : ''}
    </div>
  )
}

export default Chat;