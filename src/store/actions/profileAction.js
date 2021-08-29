import { db } from "../../firebase/firebase";
import  firebase from 'firebase';

export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const CHANGE_AGE = "PROFILE::CHANGE_AGE";
export const CHANGE_CHECK_BOX = "PROFILE::CHANGE_CHECK_BOX";
export const CHANGE_IS_AUTHED = "PROFILE::CHANGE_IS_AUTHED";
// export const SET_USER_ID = "PROFILE::SET_USER_ID";

export const changeProfile = (name) => ({
  type: CHANGE_NAME,
  payload: { name }
});
export const changeProfileAge = (age) => ({
  type: CHANGE_AGE,
  payload: { age }
});
export const changeProfileCheckBox = (checkBox) => ({
  type: CHANGE_CHECK_BOX,
  payload: { checkBox }
}); 
export const changeIsAuthed = (isAuthed) => ({
  type: CHANGE_IS_AUTHED,
  payload: { isAuthed }
})
// export const setUserId = (userId) => ({
//   type: SET_USER_ID,
//   payload: { userId }
// })

// >>-- Работа с БД -- >> //

export const changeProfileNameDB = (newName) => {
  return (dispatch, getState) => {
    // получение userID
    // firebase.auth().onAuthStateChanged(user=> {
    //   // -> Запись в БД
    //     db.ref('profile').child(user.userId).child('name').set(newName);
    //   // <-
    // })
  }
}
export const changeProfileAgeDB = (age) => {
  return (dispatch, getState) => {
    // получение userID
    // firebase.auth().onAuthStateChanged(user=> {
    //   // -> Запись в БД
    //     db.ref('profile').child(user.uid).child('age').set(age);
    //   // <-
    // })
    
  }
}
export const subscribeOmProfileChangings = () => {
  return (dispatch, getState) => {
    // -> подписываемся на события изменения/обновления из БД
      db.ref('profile').child('name').on('child_added', snapshot => {
        dispatch(changeProfile(snapshot.val()));
      });
      db.ref('profile').child('name').on('child_changed', snapshot => {
        dispatch(changeProfile(snapshot.val()));
      });
    // <-
  }
}
// <<-- Работа с БД --<<