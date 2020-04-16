import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'

const initialState = {
    requesting: false,
    success: false,
    errors: [],
    data: {}
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUESTING:
            
            return {
                requesting: true,
                success: false,
                errors: [],
                data: {}
            }
        case LOGIN_SUCCESS:
            return {
                requesting: false,
                success: true,
                errors: [],
                data: action.payload.data
            }
        case LOGIN_FAILURE:
            return {
                requesting: false,
                success: false,
                errors: [],
                
            }
        default:
            return state
    }
}

export default loginReducer