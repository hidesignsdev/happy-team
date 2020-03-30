import { FETCH_GITHUB_INFO, FETCH_GITHUB_INFO_FAILURE } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { getGithubInfoSuccess } from '../actions'

async function fetchGithubInfoAPI(username) {
    const user = username
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json()
    return data;
}

function* getGithubInfo(action) {
    try {
        const data = yield call(fetchGithubInfoAPI, action.payload.username)
        if (data.message === "Not Found") {
            yield put({ type: FETCH_GITHUB_INFO_FAILURE})
        }
        else
            yield put(getGithubInfoSuccess(data))
    } catch (err) {
        // console.log(err)
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_GITHUB_INFO, getGithubInfo)
}
export default rootSaga 