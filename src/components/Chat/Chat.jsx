import React from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddMessage } from '../../store/actions/chatsAction';

const Chat = () => {
  const dispatch = useDispatch();
  const { chats, chatsList } = useSelector(state => state);
  const timer = React.useRef(null);
  const { chatId } = useParams();

  React.useEffect(() => {
    const chatItem = chats[chatId];
    
    if (chatItem?.length && chatItem[chatItem.length - 1]?.author === 'ME') {
      timer.current = setTimeout(() => {
        dispatch(changeAddMessage({
          chatId,
          newMessage: {
            id: (Date.now()).toString(),
            text: "Привет!",
            author: chatsList.items.find(el => el.id === chatId).name
          }
        }))
      }, 1500)
    }
  }, [chats, chatId, dispatch, chatsList]);

  React.useEffect(() => {
    return () => {
      clearInterval(timer.current);
    }
  }, []);

  const handleMessageSubmit = (newMessageText) => {
    dispatch(changeAddMessage({
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