import { all } from 'redux-saga/effects';
import { watchDataSaga } from './fetchDataSaga'

export default function* rootSaga() {
    yield all([watchDataSaga]);
}