import { all } from 'redux-saga/effects'
import SignupSaga from '../containers/signup/sagas'
import LoginSaga from '../containers/login/saga'
export default function* rootSaga() {
    yield all([
        SignupSaga(),
        LoginSaga()
    ])
}