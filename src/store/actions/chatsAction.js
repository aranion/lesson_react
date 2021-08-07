export const CHANGE_ADD_CHAT_MESSAGES = "CHATS::CHANGE_ADD_CHAT_MESSAGES";
export const CHANGE_DELETE_CHAT_MESSAGES = "CHATS::CHANGE_DELETE_CHAT_MESSAGES";
export const CHANGE_ADD_MESSAGE = "CHATS::CHANGE_ADD_MESSAGE";

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
