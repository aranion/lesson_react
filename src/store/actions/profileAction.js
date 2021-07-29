export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const CHANGE_AGE = "PROFILE::CHANGE_AGE";
export const CHANGE_CHECK_BOX = "PROFILE::CHANGE_CHECK_BOX";

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