import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import signupReducer from '../containers/signup/reducer'
import loginReducer from '../containers/login/reducer'
const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    form: formReducer
})
export default rootReducer