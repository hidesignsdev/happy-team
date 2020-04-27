import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import signupReducer from '../containers/signup/reducer'
import loginReducer from '../containers/login/reducer'
import updateProfileReducer from '../containers/profile/reducer'
const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    form: formReducer,
    updateProfile:updateProfileReducer
})
export default rootReducer