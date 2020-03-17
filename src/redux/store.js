import { createStore, compose } from 'redux'
import calculatorReducer from './reducers/calculatorReducer'

const store = createStore(
    calculatorReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store