import { all } from 'redux-saga/effects'
import SignupSaga from '../containers/signup/sagas'
import LoginSaga from '../containers/login/saga'
import updateProfileSaga from '../containers/profile/sagas'
export default function* rootSaga() {
    yield all([
        SignupSaga(),
        LoginSaga(),
        updateProfileSaga()
    ])
}