import { takeLatest, call, put } from "redux-saga/effects";
import { SIGN_UP_REQUEST } from "./constants";
import request from "./../../common/api";
import { pick } from "lodash";
import { signUpSuccess, signUpFailure } from "./actions";

const url = "functions/userSignup";

function* signupFlow(action) {
  try {
    const dataParam = pick(action.payload.data, [
      "firstName",
      "lastName",
      "email",
      "password",
    ]);
    let response = yield call(request, url, dataParam, "POST");
    yield put(signUpSuccess(response.result));
  
    localStorage.setItem('token', response.result.sessionToken);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
function* signupWatcher() {
  yield takeLatest(SIGN_UP_REQUEST, signupFlow);
}

export default signupWatcher;
