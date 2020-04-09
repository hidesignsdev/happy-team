import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer
})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store



// import { combineReducers } from 'redux'
// import dataReducer from './sagaReducer'

// const rootReducer = combineReducers({
//     dataReducer
// })
// export default rootReducer