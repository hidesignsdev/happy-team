import {
    fetchSuccess,
    fetchError,
    loading
} from './actions'
import {
    REQUEST_API_DATA
} from "./actions/constants";
import { call, put, takeLeading } from "redux-saga/effects";


async function fetchGithubData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json()
        return data
    }
    catch (err) {
        // console.log('4',err)
        throw new err()
    };
}


function* getApiData(action) {
    try {
        yield (put(loading()));
        const data = yield call(fetchGithubData, action.payload.username);
        //console.log('5',data)
        if (data.message === "Not Found") {
            yield put(fetchError())
        }
        else {
            yield put(fetchSuccess(data));
        }
    }
    catch (error) {
        console.log(error);
    }
}
export default function* mySaga() {
    yield takeLeading(REQUEST_API_DATA, getApiData)
}