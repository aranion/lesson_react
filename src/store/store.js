import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import chatsReducer from "./reducers/reducerChats/selectors";
import chatsList from './reducers/reducerChatsList/selectors';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  chatsList: chatsList
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)