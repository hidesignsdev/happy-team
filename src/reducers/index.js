import { combineReducers } from 'redux';
import fetchGithubReducer from './githubInfoReducer';

export default combineReducers({
  githubFetch:fetchGithubReducer
 
});