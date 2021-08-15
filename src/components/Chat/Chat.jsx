import React from 'react';
import './chat.css';
import { useParams } from 'react-router-dom';
import Message from './Message/Message';
import ChatInput from './ChatInput/ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputMessage, changeAddMessageBot, subscribeOmChatChangings } from '../../store/actions/chatAction';

// вернуть данные при обновлении (подписка на события)
  // const subscribeOmMessagesChangings = (chatId, callback) => {
  //   const db = firebase.database();

  //   if (chatId) {
  //     db.ref('chat').child('items').child(chatId).on('child_added', snapshot => {
  //       console.log('child_added', snapshot.val());
  //       callback(snapshot.val());
  //     })
  //     db.ref('chat').child('items').child(chatId).on('child_changed', snapshot => {
  //       console.log('child_changed', snapshot.val());
  //       callback(snapshot.val());
  //     })
  //   }
  // }
//

const Chat = () => {
  const dispatch = useDispatch();
  const { chatList, chat } = useSelector(state => state);
  const { chatId } = useParams();

  React.useEffect(() => {
    //получить данные с БД
    // if (chatId) {
      //получение без подписки на событие
      // db.ref('chat').child('items').child(chatId).get().then(snapshot => {
      //   const chatArr = [];
      //   snapshot.forEach(item => { chatArr.push(item.val()) });
      //   console.log('chatArr', chatArr);
      // })
      //
    // }
    //
    if (chatId) {
      dispatch(subscribeOmChatChangings(chatId));
    }
  }, [dispatch, chatId]);

  const handleMessageSubmit = (newMessageText) => {
    dispatch(changeAddMessageBot({
      chatId,
      newMessage: {
        id: (Date.now()).toString(),
        text: newMessageText,
        author: 'ME'
      }
    }));
  };
  const handleMessageChange = (e) => {
    dispatch(changeInputMessage(e.target.value));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleMessageSubmit) {
      handleMessageSubmit(chat.inputMessage);
      dispatch(changeInputMessage(''));
    }
  }
  return (
    <div>
      {chatId && chat?.items && Object.keys(chat.items).indexOf(chatId) !== -1
        ? <ChatInput
          inputMessage={chat.inputMessage}
          handleMessageChange={handleMessageChange}
          handleSubmit={handleSubmit}
        />
        : 'Выберите чат'}
      {chat.items[chatId]?.map(m => {
        if (m.id) {
          return <Message key={m.id} message={m} />
        }
        return '';
      })}
      {chatId && chat.isVisiblePrint
        ? <div className='chat-process-print'>
          <div className="loading">
            {chatList.items[chatId]?.name}
            : печатает...
          </div>
        </div>
        : ''}
    </div>
  )
}

export default Chat;