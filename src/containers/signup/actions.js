import { SIGNUP} from './constants'

export const signUp = (data) => {
    return {
        type: SIGNUP,
        payload: { data }
    }
}