import { CHANGE_ADD_NEW_CHAT, CHANGE_INPUT_AUTHOT, CHANGE_DELETE_CHAT } from "../../actions/chatsListAction";

const initialState = {
  inputPartner: '',
  items: [
    { id: "chatid1", name: 'BOT1' },
    { id: "chatid2", name: 'BOT2' },
  ]
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADD_NEW_CHAT: { 
      return {
        ...state,
        items: [...state.items, action.payload.inputPartner]
      }
    }
    case CHANGE_INPUT_AUTHOT: { 
      return {
        ...state,
        inputPartner: action.payload.value
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