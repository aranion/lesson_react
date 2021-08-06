export const CHANGE_ADD_CHAT = "CHATS::CHANGE_ADD_CHAT";
export const CHANGE_ADD_MESSAGE = "CHATS::CHANGE_ADD_MESSAGE";
export const CHANGE_DELETE_CHAT = "CHATS::CHANGE_DELETE_CHAT";

export const changeAddChat = (newChat) => ({
  type: CHANGE_ADD_CHAT,
  payload: { newChat }
});
export const changeAddMessage = (message) => ({
  type: CHANGE_ADD_MESSAGE,
  payload: { message }
});
export const changeDeleteChat = (chatId) => ({
  type: CHANGE_DELETE_CHAT,
  payload: { chatId }
});