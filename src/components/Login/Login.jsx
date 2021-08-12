import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React from 'react';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loginSetEmail, loginSetError, loginSetIsSigningUp, loginSetPassword } from '../../store/actions/loginAction';

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, error, isSigningUp } = useSelector(state => state.login);

  const handleChangeEmail = (e) => dispatch(loginSetEmail(e.target.value));
  const handleChangePassword = (e) => dispatch(loginSetPassword(e.target.value));
  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      dispatch(loginSetError(err.message));
    }
  };
  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      dispatch(loginSetError(err.message));
    }
  };
  const handleSubmit = async () => {
    if (!email || !password) {
      dispatch(loginSetError('Заполните все поля!'));
      return;
    }
    if (isSigningUp) {
      handleSignUp();
      return;
    }
    handleLogin();
  }
  const handleIsSigninUpChange = (e) => {
    dispatch(loginSetIsSigningUp(e.target.checked));
  }

  return <div>
    <h4>Login</h4>
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isSigningUp}
            onChange={handleIsSigninUpChange}
            color="primary"
          />
        }
        label={<p>Нет УЗ.</p>}
      />

      <TextField
        variant='outlined'
        placeholder='Email'
        value={email}
        type='email'
        onChange={handleChangeEmail}
      />
      <TextField
        variant='outlined'
        placeholder='Password'
        value={password}
        type='password'
        onChange={handleChangePassword}
      />
      <button onClick={handleSubmit}>
        {isSigningUp ? 'Sign up' : 'Log in'}
      </button>
    </div>
    <p>{error}</p>
  </div>
}

export default Login;