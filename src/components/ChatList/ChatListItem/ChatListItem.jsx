import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired,
  chatId: PropTypes.string.isRequired,
  handleDeleteChat: PropTypes.func.isRequired,
  quantityMessages: PropTypes.number
}
ChatListItem.defaultProps = {
  chatId: '',
};

export default function ChatListItem(props) {
  const { chat, chatId, handleDeleteChat, quantityMessages } = props;

  return (
    <div className='wrapper_chat_item'>
      <Link to={"/chat/" + chat.chatId} >
        <ListItem
          button
          key={chat.chatId}
          selected={chat.chatId === chatId}
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
      <button className='button_delete_chat' onClick={() => handleDeleteChat(chat.chatId)}>
        X
      </button>
      {!quantityMessages || <div className='current-message'>{quantityMessages}</div>}
    </div>
  )
}