import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import signupReducer from '../containers/signup/reducer'

const rootReducer = combineReducers({
    signup:signupReducer,
    form:formReducer
})
export default rootReducer