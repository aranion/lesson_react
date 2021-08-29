import { db } from "../../firebase/firebase";

export const CHANGE_ADD_NEW_CHAT = "CHATSLIST::CHANGE_ADD_NEW_CHAT";
export const CHANGE_DELETE_CHAT = "CHATSLIST::CHANGE_DELETE_CHAT";
export const CHANGE_INPUT_AUTHOT = "CHATSLIST::CHANGE_INPUT_AUTHOT";
export const CHANGE_ADD_QUANTITY_MESSAGES = "CHATLIST::CHANGE_ADD_QUANTITY_MESSAGES";

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
export const changeAddQuantityMessages = (chatId, quantityMessages) => ({
  type: CHANGE_ADD_QUANTITY_MESSAGES,
  payload: { chatId, quantityMessages }
});

// >>-- Работа с БД -- >> //

export const changeAddChatDB = (newChat) => {
  return (dispatch, getState) => {
    // -> Запись в БД
      db.ref('chatList').child('items').child(newChat.chatId).push(newChat);
    // <-
  }
}
export const changeDeleteChatFromDB = (chatId) => {
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
  return (dispatch, getState) => {
    // -> подписываемся на события изменения/обновления из БД
      db.ref('chatList').child('items').on('child_added', snapshot => {
        dispatch(changeAddNewChat(Object.values(snapshot.val())[0]));
      });
      db.ref('chatList').child('items').on('child_changed', snapshot => {
        dispatch(changeAddNewChat(Object.values(snapshot.val())[0]));
      });
      // db.ref('chatList').child('items').on('value', snapshot => {
      //   dispatch(changeAddNewChat(Object.values(snapshot.val())[0]));
      // })
      // db.ref('chatList').child('items').on('child_removed', snapshot => {
      // })
    // <-
  }
}
// <<-- Работа с БД --<<