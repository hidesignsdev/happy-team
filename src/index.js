import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware,compose  } from 'redux'
import { Provider } from 'react-redux'
import sagaReducer from './reducers'
import rootSaga from './sagas'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  sagaReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
