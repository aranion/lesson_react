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
    dispath(changeAddMessage(message));

    const timerBot = setTimeout( ()=> {
      dispath(changeAddMessage( {
        chatId: message.chatId,
        newMessage: {
          id: (Date.now()).toString(),
          text: "Привет! O_o",
          author: getState().chatsList.items.find(el => el.id === message.chatId).name
        }
      }));

      clearTimeout(timerBot);
    }, 1500)
}};

export const changeAddMessageSaga = (message) => ({
  type: CHANGE_ADD_MESSAGE_SAGA,
  payload: { message }
});