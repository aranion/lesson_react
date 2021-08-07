import React from "react";
import { PropTypes } from 'prop-types';

Message.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
Message.defaultProps = {
  id: Date.now(),
  author: 'Anonym',
  text: 'Default'
};

function Message(props) {
  const { message = [] } = props;
  //componentDidMount
  React.useEffect(() => {
    console.log('function - componentDidMount hook');
    //componentWillUnmount
    return () => {
      console.log('function - componentWillUnmount hook');
    }
  }, [])
  // //componentDidUpdate
  // React.useEffect(() => {
  //   console.log('function - componentDidUpdate hook', { count });
  // }, [count])
  //componentDidUpdate
  React.useEffect(() => {
    console.log('function - componentDidUpdate hook');
  }, [])
  // const handleClick2 = React.useCallback(
  //   () => { setCount(count + 2) }, [count]
  // );

  return <React.Fragment>
    <div className={'wrapper-row-' + (message.author === 'ME' ? message.author.toLowerCase() : 'bot')}>
      <div>
        <div className="message-top">
          От: <span >{message.author}</span>
        </div>
        <span className="message-p">{message.text}</span>
      </div>
    </div>
  </React.Fragment>
}

export default Message;