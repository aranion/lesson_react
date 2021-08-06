import { CHANGE_DELETE_CHAT } from "../actions/chatsAction";
import { CHANGE_ADD_NEW_CHAT, CHANGE_INPUT_AUTHOT } from "../actions/chatsListAction";

const initialState = {
  partner: '',
  items: [
    { id: "chatid1", name: 'BOT1' },
    { id: "chatid2", name: 'BOT2', },
    { id: "chatid3", name: 'BOT3', },
    { id: "chatid4", name: 'BOT4', },
  ]
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADD_NEW_CHAT: { 
      return {
        ...state,
        items: [...state.items, action.payload.partner]
      }
    }
    case CHANGE_INPUT_AUTHOT: { 
      return {
        ...state,
        partner: action.payload.value
      }
    }
    case CHANGE_DELETE_CHAT: { 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.chatId)
      }
    }
    default:
      return state;
  }
  
}