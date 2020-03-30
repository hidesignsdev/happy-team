import {
    fetchSuccess,
    fetchError,
    loading
} from './actions'
import {
    REQUEST_API_DATA
} from "./actions/constants";
import { call, put, takeLatest } from "redux-saga/effects";



async function fetchGithubData(username) {

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json()
    return data

}


function* getApiData(action) {
    try {
        yield (put(loading()));
        const data = yield call(fetchGithubData, action.payload.username);
        yield put(fetchSuccess(data));
    }
    catch (error) {
        yield put(fetchError())

    }
}
export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData)
}