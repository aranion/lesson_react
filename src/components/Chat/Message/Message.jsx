import React from "react";
import { PropTypes } from 'prop-types';
import './message.css'

Message.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
Message.defaultProps = {
  id: '',
  author: 'Anonym',
  text: 'Default'
};

function Message(props) {
  const { message = [] } = props;

  return <React.Fragment>
    <div className={'wrapper-row-' + (message?.author === 'ME' ? message.author.toLowerCase() : 'bot')}>
      <div className="message-top">
        <span className='message-span'>От: {message.author}</span>
      </div>
      <span className="message-p">{message.text}</span>
    </div>
  </React.Fragment>
}

export default Message;