import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired,
  chatList: PropTypes.object.isRequired,
  chatId: PropTypes.string.isRequired,
  handleDeleteChat: PropTypes.func.isRequired
}
ChatListItem.defaultProps = {
  chatId: '',
};

export default function ChatListItem(props) {
  const { chat, chatList, chatId, handleDeleteChat } = props;

  return (
    <div className='wrapper_chat_item'>
      <Link to={"/chat/" + chat.id} >
        <ListItem
          button
          key={chat.id}
          selected={chat.id === chatId}
        >
          <ListItemAvatar>
            <Avatar alt={chat.name} src="/" />
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
      {chatList[chat.id]?.length !== 0
        ? <div className='current-message'>{chatList[chat.id]?.length}</div>
        : ''
      }
    </div>
  )
}