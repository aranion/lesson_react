import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { persistor, store } from './store/store';
// import {PersistGate} from 'redux-persist/integration/react';
import './firebase/firebase';
import Menu from './components/Menu/Menu';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      {/* <PersistGate persistor={persistor} > */}
        <BrowserRouter>
          <Menu />
          <Router />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
