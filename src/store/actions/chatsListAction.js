export const CHANGE_ADD_NEW_CHAT = "CHATSLIST::CHANGE_ADD_NEW_CHAT";
export const CHANGE_DELETE_CHAT = "CHATSLIST::CHANGE_DELETE_CHAT";
export const CHANGE_INPUT_AUTHOT = "CHATSLIST::CHANGE_INPUT_AUTHOT";

export const changeAddNewChat = (partner) => ({
  type: CHANGE_ADD_NEW_CHAT,
  payload: { partner }
});
export const changeInputAuthor = (value) => ({
  type: CHANGE_INPUT_AUTHOT,
  payload: { value }
});
export const changeDeleteChat = (chatId) => ({
  type: CHANGE_DELETE_CHAT,
  payload: { chatId }
});