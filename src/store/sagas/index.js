import { put, takeLatest, delay, select } from 'redux-saga/effects';
import { changeAddMessage, changeVisiblePrint, CHANGE_ADD_MESSAGE_SAGA } from '../actions/chatsAction';

export default function* mySaga() {
  yield takeLatest(CHANGE_ADD_MESSAGE_SAGA, workerAddMessage);
  // yield takeEvery(CHANGE_ADD_MESSAGE_SAGA, workerAddMessage);
};
function* workerAddMessage(action) {
  const {newMessage, chatId} = action.payload.message;
  
  yield put(changeAddMessage(action.payload.message));
  yield delay(500);
  yield put(changeVisiblePrint(true));

  if (newMessage.author === 'ME') {
    yield delay(2000);
    yield put(changeVisiblePrint(false));
    const chatsListItems = yield select(store => store.chatsList.items);

    yield put(changeAddMessage({
      chatId: chatId,
      newMessage: {
        id: (Date.now()).toString(),
        text: "Привет!.. O_o",
        author: chatsListItems.find(el => el.id === chatId).name,
      }
    }));
  }
};
