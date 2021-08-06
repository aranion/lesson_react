import { CHANGE_ADD_CHAT_MESSAGES, CHANGE_ADD_MESSAGE, CHANGE_DELETE_CHAT_MESSAGES } from "../../actions/chatsAction";

const initialState = {
    chatid1: [{
      id: 0,
      author: 'BOT1',
      text: 'Тестовое сообщение 1'
    }],
    chatid2: [{
      id: 0,
      author: 'ME',
      text: 'Тестовое сообщение 2'
    }],
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
    case CHANGE_DELETE_CHAT_MESSAGES: { 
      delete state[action.payload.chatId]
      return {
        ...state
      }
      
    }
    default:
      return state;
  }
  
}