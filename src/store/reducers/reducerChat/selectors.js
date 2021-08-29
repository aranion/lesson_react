import { 
  CHANGE_ADD_CHAT_MESSAGES, 
  CHANGE_ADD_MESSAGE, 
  CHANGE_DELETE_CHAT_MESSAGES, 
  CHANGE_INPUT_MESSAGE,
  CHANGE_VISIBLE_PRINT
} from "../../actions/chatAction";

const initialState = {
    isVisiblePrint: false,
    inputMessage: '',
    items: {}
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
        items: {
          ...state.items,
          [action.payload.message.chatId]: action.payload.message.newMessage,
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