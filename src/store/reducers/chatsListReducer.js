import { CHANGE_DELETE_CHAT } from "../actions/chatsAction";
import { CHANGE_ADD_PARTNER, CHANGE_INPUT_AUTHOT } from "../actions/chatsListAction";

const initialState = {
  partner: '',
  items: [
    { id: "chatid0", name: 'BOT1' },
    { id: "chatid1", name: 'BOT2', },
    { id: "chatid2", name: 'BOT3', },
    { id: "chatid3", name: 'BOT4', },
    { id: "chatid4", name: 'BOT5' },
    { id: "chatid5", name: 'BOT6', },
    { id: "chatid6", name: 'BOT7', },
    { id: "chatid7", name: 'BOT8', },
  ]
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADD_PARTNER: { 
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