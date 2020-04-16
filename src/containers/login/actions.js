import { LOGIN_REQUESTING } from './constants'

export const logIn = (data) => {
    return {
        type: LOGIN_REQUESTING,
        payload: { data }
    }
}