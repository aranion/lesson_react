export const CHANGE_ADD_PARTNER = "CHATSLIST::CHANGE_ADD_PARTNER";
export const CHANGE_INPUT_AUTHOT = "CHATSLIST::CHANGE_INPUT_AUTHOT";

export const changeAddPartner = (partner) => ({
  type: CHANGE_ADD_PARTNER,
  payload: { partner }
});
export const changeInputAuthor = (value) => ({
  type: CHANGE_INPUT_AUTHOT,
  payload: { value }
});