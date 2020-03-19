import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RandomQuote from './components/RandomQuote'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'



const store = createStore(rootReducer)


// React.DOM redering
ReactDOM.render(
    <Provider store={store}>
        <RandomQuote />
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
