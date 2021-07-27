
import React from "react";
import { Switch, Route } from "react-router";
import { Link, Redirect } from "react-router-dom";
import App from "../App";
import '../App.css'
import Profile from "../components/Profile";

export default function Router() {
  return (
  <div>
    <div className="wrapper-links">
      <Link to="/" > Home </Link>
      <Link to="/chats/id1" > Chats </Link>
      <Link to="/profile" > Profile </Link>
    </div>

    <Switch>
      <Route path='/' exact component ={ App } />
      <Route path='/chats' exact render={ (params) => <p>page chats</p>} />
      <Route path='/chats/:chatId' exact render={ ({match}) => <App chatId={match} /> }/>
      <Route path='/profile'><Profile /></Route>
      <Route><p>404: not found</p></Route> 
      <Redirect to='/' />
    </Switch>
  </div>
  )
}