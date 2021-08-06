import { CHANGE_ADD_CHAT_MESSAGES, CHANGE_ADD_MESSAGE } from "../actions/chatsAction";

const initialState = {
    chatid1: [{
      id: 0,
      author: 'Bot',
      text: 'Тестовое сообщение 1'
    }],
    chatid2: [{
      id: 0,
      author: 'Bot',
      text: 'Тестовое сообщение 2'
    }],
    chatid3: [],
    chatid4: [],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADD_CHAT_MESSAGES: {
      return {
        ...state,
        [action.payload.newChat?.nextId]: []
      }
    }
    case CHANGE_ADD_MESSAGE: { 
      return {
        ...state,
        // ...state[action.payload.message.chatId].push(action.payload.message.newMessage)
        [action.payload.message.chatId]: 
          [ ...state[action.payload.message.chatId], 
            action.payload.message.newMessage
          ]
      }
    }
    default:
      return state;
  }
  
}