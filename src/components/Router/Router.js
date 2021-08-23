import React from "react";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import App from "../../App";
import Home from "../Home/Home";
import News from "../News/News";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { changeIsAuthed } from '../../store/actions/profileAction';
import PrivateRoute from './PrivateRoute';

export default function Router() {
  const dispatch = useDispatch();

  React.useEffect(()=> {  
    firebase.auth().onAuthStateChanged( user => {
      dispatch(changeIsAuthed(!!user));
    })
  }, [dispatch]);

  return (
  <div>
    <Switch>
      <Route path='/' exact component ={ Home } /> 
      <PrivateRoute path='/chat' exact render={() => <App />} />
      <PrivateRoute path='/chat/:chatId' exact render={ ({match}) => <App chatId={match} /> }/>
      <PrivateRoute path='/profile'><Profile /></PrivateRoute>
      <Route path='/login' component={Login}/>
      <Route path='/news'><News /></Route>
      <Route><p>404: not found</p></Route> 
      <Redirect to='/' />
    </Switch>
  </div>
  )
}