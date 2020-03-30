import { combineReducers } from 'redux';
import fetchGithubReducer from './fetchGithubReducer';

export default combineReducers({
  githubFetch:fetchGithubReducer
 
});