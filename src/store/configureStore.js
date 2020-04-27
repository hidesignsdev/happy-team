import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
const sagaMiddleware = createSagaMiddleware()

const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeSetup(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
