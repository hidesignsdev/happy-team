import { all } from "redux-saga/effects"
import { mySaga } from "./githubInfoSaga";
export default function* rootSaga() {
    yield all([mySaga]);
}