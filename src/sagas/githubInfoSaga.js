import {
    fetchSuccess,
    fetchError,
    loading
} from '../actions'
import {
    REQUEST_API_DATA
} from "../actions/constants";
import request from '../helpers/api'
import { call, put, takeLeading } from "redux-saga/effects";

function* getApiData(action) {
    try {
        yield (put(loading()));
        const data = yield call(request, `https://api.github.com/users/${action.payload.username}`, null, 'GET');
        yield put(fetchSuccess(data));
    }
    catch (error) {
        yield put(fetchError())
    }
}
export default function* mySaga() {
    yield takeLeading(REQUEST_API_DATA, getApiData)
}