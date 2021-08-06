import React from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';
import { AUTHOR } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddMessage } from '../../store/actions/chatsAction';

const Chat = (props) => {
  const dispatch = useDispatch();
  const { chats, chatsList } = useSelector(state => state);
  const timer = React.useRef(null);
  const { chatId } = useParams();

  React.useEffect(() => {
    const chatItem = chats[chatId];
    
    if (chatItem?.length && chatItem[chatItem.length - 1]?.author === AUTHOR.ME) {
      timer.current = setTimeout(() => {
        dispatch(changeAddMessage({
          chatId,
          newMessage: {
            id: chats[chatId].length + 1,
            text: "Привет!",
            author: 'Bot'
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
        id: chats[chatId].length + 1,
        text: newMessageText,
        author: AUTHOR.ME
      }
    }))
  }

  return <div>
    <div>
      {/* {chatId && Object.keys(messagesChat).indexOf(chatName) !== -1
        ? <ChatInput onSubmit={handleMessageSubmit} />
        : 'Выберите чат'} */}
      <ChatInput onSubmit={handleMessageSubmit} />

      {chats[chatId]?.map(m => {
        return <Message key={m.id} message={m} />
      })}
    </div>
  </div>
}

export default Chat;