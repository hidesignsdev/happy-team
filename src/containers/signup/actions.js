import { SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from './constants'

export const signUp = (data) => {
    return {
        type: SIGN_UP_REQUEST,
        payload: { data }
    }
}
export const signUpSuccess = (data) => {
    return {
        type: SIGN_UP_SUCCESS,
            payload: data
    }
}
export const signUpFailure = () => {
    return {
        type: SIGN_UP_FAILURE,
    }
}