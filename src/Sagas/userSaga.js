import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const getUserName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  return result[0].name;
};

function* fetchUser() {
  try {
    const userName = yield getUserName();
    yield put({ type: "UPDATE_NAME_SUCCESS", payload: userName });
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
  }
}

function* userSaga() {
  yield takeEvery("UPDATE_NAME", fetchUser);
}

export default userSaga;
