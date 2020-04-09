// import { takeLatest, call, put } from 'redux-saga/effects'
// import {
//     SIGNUP_REQUESTING,
//     SIGNUP_SUCCESS,
//     SIGNUP_ERROR
// } from './constants'

// import _ from "lodash";
// import axios from 'axios'


// async function signupApi(firstname, lastname, email, password) {
//     console.log("ismfnsjfnsfninin")
//     try {
//         let response = await axios({
//             method: 'post',
//             url: 'https://api.korec-dev.scrum-dev.com/api/functions/userSignup',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
//                 'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
//             },
//             data: JSON.stringify(firstname, lastname, email, password),
//         });
//         // let result = response.json();
//         return response;
//     } catch (error) {
//         console.error(error);
//     }
// }

// function* signupFlow(action) {
//     const { firstname, lastname, email, password } = action
//     try {
//         const response = yield call(signupApi, firstname, lastname, email, password)
//         yield put({ type: SIGNUP_SUCCESS, response })
//     } catch (error) {
//         yield put({ type: SIGNUP_ERROR, error })
//     }
// }

// function* signupWatcher() {
//     yield takeLatest(SIGNUP_REQUESTING, signupFlow)
// }

// export default signupWatcher