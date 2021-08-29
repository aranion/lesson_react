import { 
  SET_EMAIL, 
  SET_ERROR, 
  SET_IS_SIGNING_UP, 
  SET_PASSWORD
} from "../../actions/loginAction";

const initialState = {
  email: '',
  password: '',
  error: '',
  isSigningUp: false,
}

export default function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload.email
      }
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    case SET_IS_SIGNING_UP: 
      return {
        ...state,
        isSigningUp: action.payload.isSigningUp
      }
    default:
      return {
        ...state
      }
  }
}