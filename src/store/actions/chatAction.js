// import firebase from 'firebase';

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
export const changeAddMessageBot = (message) => {
  return (dispath, getState) => {
    // const db = firebase.database();
    // db.ref('messages').child(message.chatId).push(message);  

    dispath(changeAddMessage(message));

    const timerPrint = setTimeout( ()=> {
      dispath(changeVisiblePrint(true));
      clearTimeout(timerPrint);
    }, 500)

    const timerBot = setTimeout( ()=> {
      dispath(changeVisiblePrint(false));
      // db.ref('messages').child(message.chatId).push({
      //   chatId: message.chatId,
      //   newMessage: {
      //     id: (Date.now()).toString(),
      //     text: "Привет! O_o",
      //     author: getState().chatList.items.find(el => el.id === message.chatId).name
      //   }}
      // );  
      dispath(changeAddMessage( {
        chatId: message.chatId,
        newMessage: {
          id: (Date.now()).toString(),
          text: "Привет! O_o",
          author: getState().chatList.items.find(el => el.id === message.chatId).name
        }
      }));

      clearTimeout(timerBot);
    }, 2000)
}};

// export const subscribeOmMessagesChangings = (chatId) => {
//   return (dispatch, getState) => {
//     const db = firebase.database();
// debugger
//     db.ref('chats').child(chatId).on('child_added', (snapshot) => {
//       debugger
//       dispatch(changeAddMessage({
//         chatId,
//         newMessage: snapshot.val()
//       }))
//     })
//     db.ref('chats').child(chatId).on('child_changed', (snapshot) => {
//       debugger
//       dispatch(changeAddMessage({
//         chatId,
//         newMessage: snapshot.val()
//       }))
//     })
//   }
  
// }

export const changeAddMessageSaga = (message) => ({
  type: CHANGE_ADD_MESSAGE_SAGA,
  payload: { message }
});