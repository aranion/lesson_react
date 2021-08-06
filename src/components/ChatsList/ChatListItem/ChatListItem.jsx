import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeDeleteChat } from '../../../store/actions/chatsListAction';
import { changeDeleteChatMessages } from '../../../store/actions/chatsAction';

export default function ChatListItem(props) {
  const { chat } = props;
  const dispatch = useDispatch();
  const { chats } = useSelector(state => state);
  const { chatId } = useParams();
  const urlHistory = useHistory();

  const handleDeleteChat = (id) => {
    dispatch(changeDeleteChatMessages(id))
    dispatch(changeDeleteChat(id))
    urlHistory.push('/chats/')
  }

  return (
    <div className='wrapper_chat_item'>
      <Link to={"/chats/" + chat.id} >
        <ListItem
          button
          key={chat.id}
          selected={chat.id === chatId}
        >
          <ListItemAvatar>
            <Avatar alt={chat.name} src="" />
          </ListItemAvatar>
          <ListItemText
            primary={chat.name}
            secondary={
              <React.Fragment>
                Text
              </React.Fragment>
            }
          />
        </ListItem>
      </Link>
      <button className='button_delete_chat' onClick={() => handleDeleteChat(chat.id)}>
        X
      </button>
      {chats[chat.id].length !== 0
        ? <div className='current-message'>{chats[chat.id].length}</div>
        : ''
      }
    </div>
  )
}