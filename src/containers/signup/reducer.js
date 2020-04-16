import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './constants'

const initialState = {
    data: {},
    success: false,
    errors: "",
    loading: false
}

function signupReducer(state = initialState, action) {
    switch (action.type) {

        case SIGN_UP_REQUEST:
            return {
                ...state,
                data: {},
                loading: true
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                success: true,
                loading: false
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default signupReducer