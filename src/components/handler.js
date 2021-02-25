import { call, put } from "redux-saga/effects";
import { requestGetUser } from "./requests";
import { setUser } from "./users";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response.data;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
