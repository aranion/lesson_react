import React from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ChatListItem from './ChatListItem/ChatListItem';
import ChatListForm from './ChatListForm/ChatListForm';
import './chatsList.css';
import { useHistory, useParams } from 'react-router-dom';
import { changeAddChatMessages, changeDeleteChatMessages } from '../../store/actions/chatAction';
import { changeAddNewChat, changeDeleteChat, changeInputAuthor } from '../../store/actions/chatListAction';
import firebase from 'firebase';

export default function ChatList() {
  const dispatch = useDispatch();
  const { chat, chatList } = useSelector(state => state);
  const { chatId } = useParams();
  const urlHistory = useHistory();
  const db = firebase.database();



  const handleDeleteChat = (id) => {
    dispatch(changeDeleteChatMessages(id))
    dispatch(changeDeleteChat(id))
    urlHistory.push('/chat/')
  }
  const generateID = () => {
    return 'chatid' + (Date.now()).toString();
  }
  const handleAddChat = (e) => {
    e.preventDefault();
    const nextId = generateID();
    urlHistory.push('/chat/' + nextId);

    //
    db.ref('chatList').child('items').child(chatId || nextId).push({ id: nextId, name: chatList.inputPartner });
    db.ref('chat').child('items').child(chatId || nextId).push({ id: nextId });
    //

    dispatch(changeAddNewChat({ id: nextId, name: chatList.inputPartner }));
    dispatch(changeAddChatMessages({ nextId }));
    dispatch(changeInputAuthor(''));
  }
  const handleInputAuthor = (e) => {
    dispatch(changeInputAuthor(e.target.value));
  }


  return (
    <div>
      <ChatListForm
        chatList={chatList}
        handleAddChat={handleAddChat}
        handleInputAuthor={handleInputAuthor}
      />
      <List subheader='Список чатов:'>
        {chatList.items.length === 0
          ? <div>Список чатов пуст :(</div>
          : chatList.items.map((item) =>
            <ChatListItem
              key={item.id}
              chat={item}
              chatList={chat.items}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          )}
      </List>
    </div >
  )
}