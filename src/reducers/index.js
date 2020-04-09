import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import signup from '../containers/signup/reducer'

const rootReducer = combineReducers({
    signup,
    form,
})
export default rootReducer