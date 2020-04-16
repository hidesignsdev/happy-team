import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './constants'

const initialState = {
    requesting: false,
    success: false,
    errors: [],
    messages: []
}

function signupReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                requesting: true,
                success: false,
                errors: [],
                messages: [{ body: 'Signing up...', time: new Date() }]
            }
        case SIGNUP_SUCCESS:
            return {
                requesting: false,
                success: true,
                errors: [],
                messages: [{ body: "Signed up successfull for your email", time: new Date() }]
            }
        case SIGNUP_FAILURE:
            return {
                requesting: false,
                success: false,
                errors: [],
                messages: [{ body: "Sign up fail...", time: new Date() }]
            }
        default:
            return state
    }
}

export default signupReducer