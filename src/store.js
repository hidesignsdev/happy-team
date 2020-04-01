  
import { createStore, applyMiddleware ,compose} from "redux";
import createSagaMiddleware from "redux-saga";
import fetchGithubReducer from "./reducers";

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

const store =createStore(fetchGithubReducer,  compose (applyMiddleware(sagaMiddleware), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;
