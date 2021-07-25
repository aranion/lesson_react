import React from "react";
import { PropTypes } from 'prop-types';

Message.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
Message.defaultProps = {
  id: '42x',
  author: 'author',
  text: ''
};

function Message(props) {
  console.log('Start function Message');
  // const [count, setCount] = React.useState(0);

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

  // const handleClick = () => {
  //   setCount(currentCount => currentCount + 1);
  // }
  // const handleClick2 = React.useCallback(
  //   () => { setCount(count + 2) }, [count]
  // );

  console.log('function - Render');

  // <React.Fragment> === <></>
  return <React.Fragment>
    {/* <div className='wrapper-row'>
      <div>{props.message.id}</div>
      <div>{props.message.text}</div>
      <div>{props.message.author}</div>
    </div> */}

    <div className={'wrapper-row-' + props.message.author.toLowerCase()}>
      {props.message.author} : {props.message.text}
    </div>
    {/*<p>Counter = {count}</p>
    <button onClick={handleClick}>+1</button>
    <button onClick={handleClick2}>handleClick2 + 2</button> 
    {props.messageList.map((m, i) => <div key={i}>{m}</div>)} */}
  </React.Fragment>
}

export default Message;