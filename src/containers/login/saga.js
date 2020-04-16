import { takeLatest, call, put } from 'redux-saga/effects'
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'
import request from './../../common/api'
import { pick } from 'lodash';

const url = 'functions/login'
function* loginFlow(action) {
    try {
        const dataParam = pick(action.payload.data, ['username', 'password']);
        console.log('dataParam', dataParam);
        const data = yield call(request, url, dataParam, 'POST')
        console.log("datapost", data.result)
      
        // yield call(storeToken, token.result.sessionToken)
        yield put({ type: LOGIN_SUCCESS, payload: {data} })
        localStorage.setItem('token', data.result.sessionToken)
        localStorage.setItem('username', data.result.firstName + " " + data.result.lastName)

    } catch (error) {
        yield put({ type: LOGIN_FAILURE, error: error.message })
        console.log(error)
    }
}

function* loginWatcher() {
    yield takeLatest(LOGIN_REQUESTING, loginFlow)
}

export default loginWatcher