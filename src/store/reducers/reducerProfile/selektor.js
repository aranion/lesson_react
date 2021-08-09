import { CHANGE_NAME, CHANGE_AGE, CHANGE_CHECK_BOX } from "../../actions/profileAction";

const initialState = {
  name:'Иван',
  age: 29,
  checkBox: false
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
    default:
      return state;
  }
  
}