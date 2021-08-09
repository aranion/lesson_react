import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./reducers/reducerProfile/selektor";
import chatsReducer from "./reducers/reducerChats/selectors";
import chatsListReducer from './reducers/reducerChatsList/selectors';
import newsReducer from "./reducers/reducerNews/selectors";
import storage from 'redux-persist/lib/storage';
import persistStor from 'redux-persist/lib/persistStore';
import persistReducer from 'redux-persist/lib/persistReducer';
// import createSagaMiddleware from "redux-saga";
// import mySaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  chatsList: chatsListReducer,
  news: newsReducer
});
const persistReducers = persistReducer( persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  // rootReducer,
  persistReducers,
  composeEnhancers(applyMiddleware(thunk))
  // composeEnhancers(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStor(store);  

// sagaMiddleware.run(mySaga);