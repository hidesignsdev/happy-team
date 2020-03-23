import { createStore, applyMiddleware } from 'redux'
import fetchGithubReducer from '../reducers/fetchGithubReducer'
import thunk from 'redux-thunk' //import thunk

const store = createStore(fetchGithubReducer, applyMiddleware(thunk)) // create store sử dụng thunk

export default store
