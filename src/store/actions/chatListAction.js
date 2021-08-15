import firebase from 'firebase';

export const CHANGE_ADD_NEW_CHAT = "CHATSLIST::CHANGE_ADD_NEW_CHAT";
export const CHANGE_DELETE_CHAT = "CHATSLIST::CHANGE_DELETE_CHAT";
export const CHANGE_INPUT_AUTHOT = "CHATSLIST::CHANGE_INPUT_AUTHOT";

export const changeAddNewChat = ({chatId, name}) => ({
  type: CHANGE_ADD_NEW_CHAT,
  payload: { chatId, name }
});
export const changeInputAuthor = (value) => ({
  type: CHANGE_INPUT_AUTHOT,
  payload: { value }
});
export const changeDeleteChat = (chatId) => ({
  type: CHANGE_DELETE_CHAT,
  payload: { chatId }
});


// >>-- Работа с БД -- >> //

export const changeAddChatDB = (newChat) => {
  const db = firebase.database();

  return (dispatch, getState) => {
    // -> Запись в БД
     db.ref('chatList').child('items').child(newChat.chatId).push(newChat);
    // <-
  }
}
export const changeDeleteChatFromDB = (chatId) => {
  const db = firebase.database();

  return (dispatch, getState) => {
    // -> Удаление из БД
    try {
      db.ref('chatList').child('items').child(chatId).remove();
    } catch (error) {
      console.error(error.message);
    }
    // <-
  }
}
export const subscribeOmChatListChangings = (chatId) => {
  const db = firebase.database();

  return (dispatch, getState) => {
    // -> подписываемся на события изменения/обновления из БД
      db.ref('chatList').child('items').on('child_added', snapshot => {
        console.log('chatList child_added');
        dispatch(changeAddNewChat(Object.values(snapshot.val())[0]));
      });
      db.ref('chatList').child('items').on('child_changed', snapshot => {
        console.log('chatList child_changed');
        dispatch(changeAddNewChat(Object.values(snapshot.val())[0]));
      })
      // db.ref('chatList').child('items').on('value', snapshot => {
      //   console.log('value', Object.values(snapshot.val())[0]);
      //   dispatch(changeAddNewChat(Object.values(snapshot.val())[0]));
      // })
      db.ref('chatList').child('items').on('child_removed', snapshot => {
        console.log('chatList child_removed');
      })
    // <-
  }
}

// <<-- Работа с БД --<<