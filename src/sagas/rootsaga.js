import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "../components/handler";
import { GET_USER } from "../components/users";
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
