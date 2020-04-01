import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer
})

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer)
export default store