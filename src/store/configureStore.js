import { createStore, applyMiddleware,compose  } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/fetchDataSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga);