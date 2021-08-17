import React from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ChatListItem from './ChatListItem/ChatListItem';
import ChatListForm from './ChatListForm/ChatListForm';
import './chatsList.css';
import { useHistory, useParams } from 'react-router-dom';
import { changeAddChatDB, changeDeleteChat, changeDeleteChatFromDB, changeInputAuthor, subscribeOmChatListChangings } from '../../store/actions/chatListAction';
import { changeDeleteChatMessages, changeDeleteChatMessagesFromDB } from '../../store/actions/chatAction';

export default function ChatList() {
  const dispatch = useDispatch();
  const { chatList } = useSelector(state => state);
  const { chatId } = useParams();
  const urlHistory = useHistory();

  React.useEffect(() => {
    dispatch(subscribeOmChatListChangings(chatId));
  }, [dispatch, chatId]);

  const handleDeleteChat = (chatId) => {
    dispatch(changeDeleteChatFromDB(chatId));
    dispatch(changeDeleteChat(chatId));
    dispatch(changeDeleteChatMessagesFromDB(chatId));
    dispatch(changeDeleteChatMessages(chatId));
    urlHistory.push('/chat/')
  }
  const generateID = () => {
    return 'chatid' + (Date.now()).toString();
  }
  const handleAddChat = (e) => {
    e.preventDefault();
    const nextId = generateID();
    urlHistory.push('/chat/' + nextId);

    dispatch(changeAddChatDB({
      chatId: nextId,
      name: chatList.inputPartner,
      quantityMessages: 0
    }));
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
        {Object.values(chatList.items).length === 0
          ? <div>Список чатов пуст :(</div>
          : Object.values(chatList.items).map((item) =>
            <ChatListItem
              key={item.chatId}
              chat={item}
              chatId={chatId}
              quantityMessages={item.quantityMessages}
              handleDeleteChat={handleDeleteChat}
            />
          )}
      </List>
    </div >
  )
}