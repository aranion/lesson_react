import React from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ChatListItem from './ChatListItem/ChatListItem';
import ChatListForm from './ChatListForm/ChatListForm';
import './chatsList.css';
import { useHistory, useParams } from 'react-router-dom';
import { changeAddChatMessages, changeDeleteChatMessages } from '../../store/actions/chatsAction';
import { changeAddNewChat, changeDeleteChat, changeInputAuthor } from '../../store/actions/chatsListAction';

export default function ChatsList() {
  const dispatch = useDispatch();
  const { chats, chatsList } = useSelector(state => state);
  const { chatId } = useParams();
  const urlHistory = useHistory();

  const handleDeleteChat = (id) => {
    dispatch(changeDeleteChatMessages(id))
    dispatch(changeDeleteChat(id))
    urlHistory.push('/chats/')
  }
  const generateID = () => {
    const nextId = 'chatid' + (Date.now()).toString();
    return nextId;
  }
  const handleAddChat = (e) => {
    e.preventDefault();

    const nextId = generateID();

    dispatch(changeAddNewChat({ id: nextId, name: chatsList.inputPartner }));
    dispatch(changeAddChatMessages({ nextId }));
    dispatch(changeInputAuthor(''));
    urlHistory.push('/chats/' + nextId);
  }
  const handleInputAuthor = (e) => {
    dispatch(changeInputAuthor(e.target.value));
  }


  return (
    <div>
      <ChatListForm
        chatsList={chatsList}
        handleAddChat={handleAddChat}
        handleInputAuthor={handleInputAuthor}
      />
      <List subheader='Список чатов:'>
        {chatsList.items.length === 0
          ? <div>Список чатов пуст :(</div>
          : chatsList.items.map((chat) =>
            <ChatListItem
              key={chat.id}
              chat={chat}
              chats={chats.items}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          )}
      </List>
    </div >
  )
}