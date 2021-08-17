import { CHANGE_NAME, CHANGE_AGE, CHANGE_CHECK_BOX, CHANGE_IS_AUTHED } from "../../actions/profileAction";

const initialState = {
  name:'Иван',
  age: 29,
  checkBox: false,
  isAuthed: false,
  // userId: null
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload.name
      }
    }
    case CHANGE_AGE: {
      return {
        ...state,
        age: +action.payload.age
      }
    }
    case CHANGE_CHECK_BOX: {
      return {
        ...state,
        checkBox: action.payload.checkBox
      }
    }
    case CHANGE_IS_AUTHED: {
      return {
        ...state,
        isAuthed: action.payload.isAuthed
      }
    }
    // case SET_USER_ID: { 
    //   return {
    //     ...state,
    //     userId: action.payload.userId
    //   }
    // }
    default:
      return state;
  }
  
}