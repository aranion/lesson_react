import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import chatsReducer from "./reducers/reducerChats/selectors";
import chatsList from './reducers/reducerChatsList/selectors';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  chatsList: chatsList
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)