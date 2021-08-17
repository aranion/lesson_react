import { CHANGE_ADD_NEW_CHAT, CHANGE_INPUT_AUTHOT, CHANGE_DELETE_CHAT, CHANGE_ADD_QUANTITY_MESSAGES } from "../../actions/chatListAction";

const initialState = {
  inputPartner: '',
  items: {}
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADD_NEW_CHAT: { 
      return {
        ...state,
        items: {
          ...state.items, 
          [action.payload.chatId]: { 
            chatId: action.payload.chatId,
            name: action.payload.name
          }
        }    
      }
    }
    case CHANGE_INPUT_AUTHOT: { 
      return {
        ...state,
        inputPartner: action.payload.value
      }
    }
    case CHANGE_DELETE_CHAT: { 
      delete state.items[action.payload.chatId]
      return {
        ...state,
        items: {...state.items}
      }
    }
    case CHANGE_ADD_QUANTITY_MESSAGES: { 
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.chatId]: {
            ...state.items[action.payload.chatId],
            quantityMessages: action.payload.quantityMessages
          }
        }
      }
    }
    default:
      return state;
  }
  
}