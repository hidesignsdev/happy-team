import { SIGN_UP_REQUEST} from './constants'

export const signUp = (data) => {
    return {
        type: SIGN_UP_REQUEST,
        payload: { data }
    }
}
// export const signUpSuccess = (data) => {
//     return {
//         type: SIGN_UP_SUCCESS,
//             payload: data
//     }
// }
// export const signUpFailure = () => {
//     return {
//         type: SIGN_UP_FAILURE,
//     }
// }