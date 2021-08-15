import firebase from 'firebase';

export const CHANGE_ADD_CHAT_MESSAGES = "CHATS::CHANGE_ADD_CHAT_MESSAGES";
export const CHANGE_DELETE_CHAT_MESSAGES = "CHATS::CHANGE_DELETE_CHAT_MESSAGES";
export const CHANGE_ADD_MESSAGE = "CHATS::CHANGE_ADD_MESSAGE";
export const CHANGE_INPUT_MESSAGE = "CHATS::CHANGE_INPUT_MESSAGE";
export const CHANGE_ADD_MESSAGE_SAGA = "CHATS::CHANGE_ADD_MESSAGE_SAGA";
export const CHANGE_VISIBLE_PRINT = "CHATS::CHANGE_VISIBLE_PRINT";

export const changeAddChatMessages = (newChat) => ({
  type: CHANGE_ADD_CHAT_MESSAGES,
  payload: { newChat }
});
export const changeDeleteChatMessages = (chatId) => ({
  type: CHANGE_DELETE_CHAT_MESSAGES,
  payload: { chatId }
});
export const changeAddMessage = (message) => ({
  type: CHANGE_ADD_MESSAGE,
  payload: { message }
});
export const changeInputMessage = (value) => ({
  type: CHANGE_INPUT_MESSAGE,
  payload: { value }
});
export const changeVisiblePrint = (value) => ({
  type: CHANGE_VISIBLE_PRINT,
  payload: value
});
export const changeAddMessageSaga = (message) => ({
  type: CHANGE_ADD_MESSAGE_SAGA,
  payload: { message }
});

// >>-- Работа с БД -- >> //

export const changeAddChatMessagesDB = (chatId) => {
  const db = firebase.database();

  return (dispatch, getState) => {
    // -> записать данные в БД
      db.ref('chat').child('items').child(chatId).push({chatId});
    // <-
  }
};
export const changeDeleteChatMessagesFromDB = (chatId) => {
  const db = firebase.database();

  return (dispatsh, getState) => {
    try {
      db.ref('chat').child('items').child(chatId).remove();
    } catch(error) {
      console.error(error.message);
    }
  }
};
export const changeAddMessageBot = (message) => {
  const db = firebase.database();

  return (dispath, getState) => {
    // -> записать данные в БД
    db.ref('chat').child('items').child(message.chatId).push(message.newMessage);
    // <-

    const tmr1 = setTimeout(()=> {
      dispath(changeVisiblePrint(true));
      clearTimeout(tmr1);
    }, 500)

    const timerBot = setTimeout( ()=> {
      dispath(changeVisiblePrint(false));
     
      // -> записать данные в БД
      db.ref('chat').child('items').child(message.chatId).push({
        id: (Date.now()).toString(),
        text: "Привет! O_o",
        author: getState().chatList.items[message.chatId]?.name
      });
      // <-
      clearTimeout(timerBot);
    }, 2000)
}};

export const subscribeOmChatChangings = (chatId) => {
  const db = firebase.database();

  return (dispatch, getState) => {

    // -> подписываемся на события изменения/обавления из/в БД
    db.ref('chat').child('items').child(chatId).on('child_added', snapshot => {
      console.log('chat child_added');
      
      dispatch(changeAddMessage({
        chatId,
        newMessage: snapshot.val()
      }));
    });
    db.ref('chat').child('items').child(chatId).on('child_changed', snapshot => {
      console.log('chat child_changed');
      
      dispatch(changeAddMessage({
        chatId,
        newMessage: snapshot.val()
      }));
    })
    // <-
  }
}