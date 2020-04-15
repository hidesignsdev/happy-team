import { takeLatest, call, put } from 'redux-saga/effects'
import { SIGNUP, SIGNUP_SUCCESS } from './constants'
import request from './../../common/api'
import { pick } from 'lodash';

const url='functions/userSignup'
function* signupFlow(action) {
    try {
       const dataParam= pick(action.payload.data,['firstName','lastName','email','password']);
       console.log('dataParam',dataParam);
        const datapost = yield call(request,url, dataParam,'POST')
         console.log("datapost", datapost)
        yield put({ type: SIGNUP_SUCCESS, payload: datapost })

    } catch (error) {
        console.log(error)
    }
}
function* signupWatcher() {
    yield takeLatest(SIGNUP, signupFlow)
}

export default signupWatcher