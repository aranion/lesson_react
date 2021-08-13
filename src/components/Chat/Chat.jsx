import React from 'react';
import './chat.css';
import { useParams } from 'react-router-dom';
import Message from './Message/Message';
import ChatInput from './ChatInput/ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputMessage, changeAddMessageBot } from '../../store/actions/chatAction';
import firebase from 'firebase';

//
const subscribeOmMessagesChangings = (chatId) => {
  const db = firebase.database();

  db.ref('chat').child('items').child(chatId).on('child_added', snapshot => {
    console.log('child_added', snapshot.val());
  })
  db.ref('chat').child('items').child(chatId).on('child_changed', snapshot => {
    console.log('child_changed', snapshot.val());
  })
}
//

const Chat = () => {
  const dispatch = useDispatch();
  const { chatList, chat } = useSelector(state => state);
  const { chatId } = useParams();

  const db = firebase.database();

  React.useEffect(() => {
    if (chatId) {
      db.ref('chat').child('items').child(chatId).get().then(snapshot => {
        const chatArr = [];
        snapshot.forEach(item => { chatArr.push(item.val()) });
        console.log(chatArr);
      })
    }
    subscribeOmMessagesChangings(chatId)
    // dispatch(subscribeOmMessagesChangings({ chatId }));
  }, [db, chatId]);

  const handleMessageSubmit = (newMessageText) => {
    //
    db.ref('chat').child('items').child(chatId).push({
      id: (Date.now()).toString(),
      text: newMessageText,
      author: 'ME'
    })
    //
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
      {/* {true */}
      {chatId && Object.keys(chat.items).indexOf(chatId) !== -1
        ? <ChatInput
          inputMessage={chat.inputMessage}
          handleMessageChange={handleMessageChange}
          handleSubmit={handleSubmit}
        />
        : 'Выберите чат'}
      {chat.items[chatId]?.map(m => <Message key={m.id} message={m} />)}
      {chatId && chat.isVisiblePrint
        ? <div className='chat-process-print'>
          <div className="loading">
            {chatList.items.find(el => el.id === chatId)?.name}
            : печатает...
          </div>
        </div>
        : ''}
    </div>
  )
}

export default Chat;