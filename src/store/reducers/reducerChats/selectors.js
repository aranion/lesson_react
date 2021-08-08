import { 
  CHANGE_ADD_CHAT_MESSAGES, 
  CHANGE_ADD_MESSAGE, 
  CHANGE_DELETE_CHAT_MESSAGES, 
  CHANGE_INPUT_MESSAGE,
  CHANGE_VISIBLE_PRINT
} from "../../actions/chatsAction";

const initialState = {
    isVisiblePrint: false,
    inputMessage: '',
    items: {
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
    }
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADD_CHAT_MESSAGES: {
      return {
        ...state,
        items: { 
          ...state.items,
          [action.payload.newChat?.nextId]: []
        }
      }
    }
    case CHANGE_ADD_MESSAGE: { 
      return {
        ...state,
        // ...state[action.payload.message.chatId].push(action.payload.message.newMessage)
        items: { 
          ...state.items, 
          [action.payload.message.chatId]: 
            [ ...state.items[action.payload.message.chatId], 
              action.payload.message.newMessage
            ]
        }
      }
    }
    case CHANGE_DELETE_CHAT_MESSAGES: { 
      delete state.items[action.payload.chatId]
      return { ...state }
    }
    case CHANGE_INPUT_MESSAGE: { 
      return { ...state, inputMessage: action.payload.value }
    }
    case CHANGE_VISIBLE_PRINT: { 
      return { ...state, isVisiblePrint: action.payload }
    }
    default:
      return state;
  }
  
}