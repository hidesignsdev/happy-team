import { all } from 'redux-saga/effects'
import SignupSaga from '../containers/signup/sagas'

export default function* rootSaga() {
    yield all([
        SignupSaga(),
    ])
}