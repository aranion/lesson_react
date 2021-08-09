import React from "react";
import { Switch, Route } from "react-router";
import { Link, Redirect } from "react-router-dom";
import App from "../App";
// import '../App.css'
import Home from "../components/Home/Home";
import News from "../components/News/News";
import Profile from "../components/Profile/Profile";

export default function Router() {
  return (
  <div>
    <div className="wrapper-links">
      <Link to="/" > Home </Link>
      <Link to="/chats" > Chats </Link>
      <Link to="/profile" > Profile </Link>
      <Link to="/news" > News </Link>
    </div>

    <Switch>
      <Route path='/' exact component ={ Home } /> 
      <Route path='/chats' exact render={() => <App />} />
      <Route path='/chats/:chatId' exact render={ ({match}) => <App chatId={match} /> }/>
      <Route path='/profile'><Profile /></Route>
      <Route path='/news'><News /></Route>
      <Route><p>404: not found</p></Route> 
      <Redirect to='/' />
    </Switch>
  </div>
  )
}