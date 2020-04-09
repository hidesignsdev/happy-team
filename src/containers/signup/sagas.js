import { takeLatest, call, put } from 'redux-saga/effects'
import { SIGNUP, SIGNUP_SUCCESS } from './constants'
import axios from 'axios'

const submitSignUp = ({ firstName, lastName, email, password }) => {
    return axios('https://api.korec-dev.scrum-dev.com/api/functions/userSignup', {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
            'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
            'Content-Type': 'application/json',
        },
        data: {
            firstName, lastName, email, password
        }
    });
}
function* signupFlow(action) {
    try {
        const datapost = yield call(submitSignUp, action.payload.data)
        // console.log("datapost", datapost)
        yield put({ type: SIGNUP_SUCCESS, payload: datapost })
    } catch (error) {
        console.log(error)
    }
}
function* signupWatcher() {
    yield takeLatest(SIGNUP, signupFlow)
}

export default signupWatcher