import React from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import Message from '../components/Message';
import ChatInput from './ChatInput';
import { AUTHOR } from '../App';


const Chat = (props) => {
  const { setMessagesChat, messagesChat } = props;
  // const [messageList, setMessageList] = React.useState([]);
  const timer = React.useRef(null);

  // console.log('props', props);

  // const params = useParams();
  // console.log('params', params);
  const { chatId } = useParams();
  let chatName = 'chat' + chatId;

  // const match = useRouteMatch('/chats/:chatId');
  // console.log('match', match);

  // const history = useHistory();
  // console.log('history', history);

  // const location = useLocation();
  // console.log('location', location);

  // const handlerGoBack = () => {
  //   history.goBack();
  // }

  React.useEffect(() => {
    const chat = messagesChat[chatName];

    if (chat?.length && chat[chat.length - 1]?.author !== AUTHOR.BOT) {
      timer.current = setTimeout(() => {
        setMessagesChat(messagesChat => (
          {
            ...messagesChat,
            [chatName]:
              [
                ...messagesChat[chatName],
                {
                  id: messagesChat[chatName].length + 1,
                  text: "Привет!",
                  author: AUTHOR.BOT
                }
              ]
          }
        ));
      }, 1500)
    }
  }, [messagesChat, chatName, setMessagesChat]);

  React.useEffect(() => {
    return () => {
      clearInterval(timer.current);
    }
  }, []);

  const handleMessageSubmit = (newMessageText) => {
    setMessagesChat(messagesChat => (
      {
        ...messagesChat,
        [chatName]:
          [
            ...messagesChat[chatName],
            {
              id: messagesChat[chatName].length + 1,
              text: newMessageText,
              author: AUTHOR.ME
            }
          ]
      }
    ));
  }

  // if (Object.keys(messagesChat).indexOf(chatName)) {
  //   console.log(';;');
  // }

  return <div>
    <div>
      {chatId && Object.keys(messagesChat).indexOf(chatName) !== -1 ? <ChatInput onSubmit={handleMessageSubmit} /> : 'Выберите чат'}

      {messagesChat[chatName]?.map(m => {
        return <Message key={m.id} message={m}>
          Текст внутри компонента - {m.id}
        </Message>
      })}
    </div>
  </div>
}

export default Chat;