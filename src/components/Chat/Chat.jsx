import React from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddMessageBot } from '../../store/actions/chatsAction';

const Chat = () => {
  const dispatch = useDispatch();
  const { chats } = useSelector(state => state);
  const { chatId } = useParams();

  const handleMessageSubmit = (newMessageText) => {
    dispatch(changeAddMessageBot({
      chatId,
      newMessage: {
        id: (Date.now()).toString(),
        text: newMessageText,
        author: 'ME'
      }
    }))
  }

  return <div>
    <div>
      {chatId && Object.keys(chats).indexOf(chatId) !== -1
        ? <ChatInput onSubmit={handleMessageSubmit} />
        : 'Выберите чат'}
      {chats[chatId]?.map(m => {
        return <Message key={m.id} message={m} />
      })}
    </div>
  </div>
}

export default Chat;