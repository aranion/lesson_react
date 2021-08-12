export const LOGIN_SET_EMAIL = "LOGIN::LOGIN_SET_EMAIL";
export const LOGIN_SET_PASSWORD = "LOGIN::LOGIN_SET_PASSWORD";
export const LOGIN_SET_ERROR = "LOGIN::LOGIN_SET_ERROR";
export const LOGIN_SET_IS_SIGNING_UP = "LOGIN::LOGIN_SET_IS_SIGNING_UP";

export const loginSetEmail = (email) => ({
  type: LOGIN_SET_EMAIL,
  payload: { email }
});
export const loginSetPassword = (password) => ({
  type: LOGIN_SET_PASSWORD,
  payload: { password }
});
export const loginSetError = (error) => ({
  type: LOGIN_SET_ERROR,
  payload: { error }
});
export const loginSetIsSigningUp = (isSigninUp) => ({
  type: LOGIN_SET_IS_SIGNING_UP,
  payload: { isSigninUp }
})
