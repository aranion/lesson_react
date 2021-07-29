import { CHANGE_NAME, CHANGE_AGE, CHANGE_CHECK_BOX } from "../actions/profileAction";

const initialState = {
  name:'Иван',
  age: 29,
  checkBox: false
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      console.log('CHANGE_NAME', state);
      return {
        ...state,
        name: action.payload.name
      }
    }
    case CHANGE_AGE: {
      console.log('CHANGE_AGE', state);
      return {
        ...state,
        age: +action.payload.age
      }
    }
    case CHANGE_CHECK_BOX: {
      console.log('CHANGE_CHECK_BOX', state);
      return {
        ...state,
        checkBox: action.payload.checkBox
      }
    }
    default:
      return state;
  }
  
}