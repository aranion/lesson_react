import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import chatsReducer from "./reducers/chatsReducer";
import chatsList from './reducers/chatsListReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  chatsList: chatsList
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)