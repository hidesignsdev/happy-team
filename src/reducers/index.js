import { combineReducers } from 'redux'
import NewQuoteReducer from './newQuoteReducer'

const rootReducer = combineReducers({
    newQuote: NewQuoteReducer
});
export default rootReducer;