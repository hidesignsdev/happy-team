import axios from 'axios'
import { FETCH_GITHUB_INFO, FETCH_GITHUB_INFO_SUCCESS, FETCH_GITHUB_INFO_FAILURE } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'

async function fetchGithubInfoAPI(username) {
    const user = username
    // axios.get(`https://api.github.com/users/${user}`)
    //     .then(result => result.data)
    //     .catch(err => {
    //         throw err;
    //     });
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json()
    return data;
}


function* getGithubInfo(action) {
    try {
        const data = yield call(fetchGithubInfoAPI, action.payload.username)
        console.log(data)
        yield put({ type: FETCH_GITHUB_INFO_SUCCESS, payload: { data } })
    } catch (e) {
        yield put({ type: FETCH_GITHUB_INFO_FAILURE })
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_GITHUB_INFO, getGithubInfo)
}

export default rootSaga 