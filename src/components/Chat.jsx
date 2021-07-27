import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import Message from '../components/Message';
import ChatInput from './ChatInput';
import { AUTHOR } from '../App';


const Chat = (props) => {
  const [messageList, setMessageList] = React.useState([]);
  const timer = React.useRef(null);
  // const prevMessageList = usePrevious(messageList);

  console.log('props', props);

  const params = useParams();
  const { chatId } = useParams();
  console.log('params', params);

  const match = useRouteMatch('/chats/:chatId');
  console.log('match', match);

  const history = useHistory();
  console.log('history', history);

  const location = useLocation();
  console.log('location', location);

  const handlerGoBack = () => {
    history.goBack();
  }

  React.useEffect(() => {
    if (messageList?.length && messageList[messageList.length - 1].author !== AUTHOR.BOT) {
      setTimeout(() => {
        setMessageList(currentMessageList => (
          [...currentMessageList,
          {
            id: messageList.length + 1,
            text: "Привет!",
            author: AUTHOR.BOT
          }
          ]
        ))
      }, 1500)
    }
  }, [messageList]);

  React.useEffect(() => {
    return () => {
      clearInterval(timer.current);
    }
  }, []);

  const handleMessageSubmit = (newMessageText) => {
    setMessageList(currentMessageList => (
      [...currentMessageList,
      {
        id: messageList.length + 1,
        text: newMessageText,
        author: AUTHOR.ME
      }
      ]
    ));
  }

  return <div>
    <p> Chat page - {chatId}</p>
    <button onClick={handlerGoBack}>Go back</button>
    <div>
      <ChatInput onSubmit={handleMessageSubmit} />
      {messageList.map(m => <Message key={m.id} message={m}> Текст внутри компонента - {m.id}</Message>)}
    </div>
  </div>
}

export default Chat;