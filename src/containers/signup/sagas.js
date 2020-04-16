import { takeLatest, call, put } from 'redux-saga/effects'
import { SIGN_UP_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE } from './constants'
import request from './../../common/api'
import { pick } from 'lodash';

const url = 'functions/userSignup'
function* signupFlow(action) {
    try {
        const dataParam = pick(action.payload.data, ['firstName', 'lastName', 'email', 'password']);
        let response = yield call(request, url, dataParam, 'POST')
        yield put({ type: SIGN_UP_SUCCESS, payload: response.result })

    } catch (error) {
        yield put({ type: SIGN_UP_FAILURE, payload: error })
    }
}
function* signupWatcher() {
    yield takeLatest(SIGN_UP_REQUEST, signupFlow)
}

export default signupWatcher