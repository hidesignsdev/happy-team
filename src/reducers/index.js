import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import signupReducer from '../containers/signup/reducer'
import loginReducer from '../containers/login/reducer'
const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    form,
})
export default rootReducer