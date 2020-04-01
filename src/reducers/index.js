import { combineReducers } from 'redux'
import dataReducer from './sagaReducer'

const rootReducer = combineReducers({
    dataReducer
})
export default rootReducer