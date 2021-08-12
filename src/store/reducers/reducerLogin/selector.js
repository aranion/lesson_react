import { 
  LOGIN_SET_EMAIL, 
  LOGIN_SET_ERROR, 
  LOGIN_SET_IS_SIGNING_UP, 
  LOGIN_SET_PASSWORD
} from "../../actions/loginAction";

const initialState = {
  email: '',
  password: '',
  error: '',
  isSigningUp: false,
}

export default function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SET_EMAIL:
      return {
        ...state,
        email: action.payload.email
      }
    case LOGIN_SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      }
    case LOGIN_SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    case LOGIN_SET_IS_SIGNING_UP:
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