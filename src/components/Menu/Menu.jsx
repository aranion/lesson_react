import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from 'firebase';

const Menu = () => {
  const isAuthed = useSelector(state => state.profile.isAuthed);

  const clickSignUp = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="wrapper-links">
      <Link to="/" > Home </Link>
      <Link to="/chats" > Chats </Link>
      <Link to="/profile" > Profile </Link>
      <Link to="/news" > News </Link>
      {isAuthed
        ? <Link to="/login" onClick={clickSignUp}>Sign Up</Link>
        : <Link to="/login" > Login </Link>
      }
    </div>
  )
}

export default Menu;