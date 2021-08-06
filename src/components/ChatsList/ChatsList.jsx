import React from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ChatListItem from './ChatListItem/ChatListItem';
import ChatListForm from './ChatListForm/ChatListForm';

export default function ChatsList() {
  const { chatsList } = useSelector(state => state);

  return (
    <div>
      <ChatListForm />
      <List subheader='Список чатов:'>
        {chatsList.items.length === 0
          ? <div>Список чатов пуст :(</div>
          : chatsList.items.map((chat) =>
            <ChatListItem key={chat.id} chat={chat} />
          )}
      </List>
    </div >
  )
}