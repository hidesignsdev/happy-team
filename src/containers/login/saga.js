import { takeLatest, call, put } from "redux-saga/effects";
import { LOGIN_REQUESTING } from "./constants";
import request from "../../common/api";
import { pick } from "lodash";
import { logInSuccess, logInFailure } from "./actions";

const url = "functions/login";
function* loginFlow(action) {
  try {
    const dataParam = pick(action.payload, ["username", "password"]);
    // console.log("function*loginFlow -> dataParam", dataParam);
    const data = yield call(request, url, dataParam, "POST");

    yield put(logInSuccess(data.result));

    localStorage.setItem("token", data.result.sessionToken);
    localStorage.setItem("username",data.result.firstName + " " + data.result.lastName );
  } catch (error) {
    yield put(logInFailure(error));
    console.log("error", error);
  }
}
function* loginWatcher() {
  yield takeLatest(LOGIN_REQUESTING, loginFlow);
}

export default loginWatcher;
