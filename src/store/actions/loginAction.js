export const SET_EMAIL = "LOGIN::LOGIN_SET_EMAIL";
export const SET_PASSWORD = "LOGIN::LOGIN_SET_PASSWORD";
export const SET_ERROR = "LOGIN::LOGIN_SET_ERROR";
export const SET_IS_SIGNING_UP = "LOGIN::LOGIN_SET_IS_SIGNING_UP";

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: { email }
});
export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: { password }
});
export const setError = (error) => ({
  type: SET_ERROR,
  payload: { error }
});
export const setIsSigningUp = (isSigningUp) => ({
  type: SET_IS_SIGNING_UP,
  payload: { isSigningUp }
})
