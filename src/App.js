import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
// import MessageClass from './components/MessageClass';


// const testMessage = 'Message text. Function component';
// const testMessageClass = 'Message text. Class component';

function App() {
  // const [showChild, setShowChild] = React.useState(true);
  const [messageList, setMessageList] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');
  const [authorInput, setAuthorInput] = React.useState('');


  React.useEffect(() => {
    if( messageList.length && messageList[messageList.length-1].author ) {
      setTimeout( () => {
      alert('Cообщение отправлено!')
    }, 1500)
    }
  }, [messageList])

  // const handleToggleShowChild = () => {
  //   setShowChild(!showChild);
  // }

  const bntMessage = (event) => {
    event.preventDefault();
    if( textInput.target && authorInput.target && authorInput.target.value !== '') {
      setMessageList( [
      ...messageList, 
      { id: messageList.length+1, 
        text: textInput.target.value, 
        author: authorInput.target.value 
      }
    ]); 
    } else {
      alert('Заполните все поля формы');
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <button onClick={handleToggleShowChild}>ToggleShowChild</button>
        {showChild ? <Message message={testMessage} /> : null}
        {!showChild ? <MessageClass message={testMessageClass} /> : null}
        */}

        <div className='wrapper-content'>
          <h2>React - Lesson 2</h2>
          <form action="#">
            <input 
              type="text" 
              name="text" 
              id="message" 
              placeholder="Сообщение"  
              className='form-input form-input-text'
              onChange={setTextInput}
            />
            <input 
              type="text" 
              name="author" 
              id="author" 
              placeholder="Автор" 
              className='form-input'
              onChange={setAuthorInput} 
            />
            <button 
              type="submit" 
              className='form-btn'
              onClick={bntMessage}
            >
              Отправить
            </button>
          </form>
          <div className='wrapper-row wrapper-row-title'>
            <div>id</div>
            <div>text</div>
            <div>author</div>
          </div>
          {
            messageList.map(m => <Message key={m.id} message={m} />)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
