import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catReducer";

function* workGetFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const shotFormattedCats = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(shotFormattedCats))
}

function* catsSaga() {
  yield takeEvery("cats/getCatsFetch", workGetFetch);
}

export default catsSaga
