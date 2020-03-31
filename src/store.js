  
import { createStore, applyMiddleware ,compose} from "redux";
import createSagaMiddleware from "redux-saga";

import fetchGithubReducer from "./reducers";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

const store =createStore(fetchGithubReducer,  compose (applyMiddleware(sagaMiddleware), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;
// then run the saga
sagaMiddleware.run(mySaga);