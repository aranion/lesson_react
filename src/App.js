import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

const testMessage = 'Message text'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message={testMessage}/>
      </header>
    </div>
  );
}

export default App;
