import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'

const initialState = {
    loading: false,
    success: false,
    error: "",
    data: {}
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUESTING:
            
            return {
                loading: true,
                success: false,
                data: {}
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
                data: action.payload.data
            }
        case LOGIN_FAILURE:
            return {
                loading: false,
                success: false,
                error: action.payload.error
                
            }
        default:
            return state
    }
}

export default loginReducer