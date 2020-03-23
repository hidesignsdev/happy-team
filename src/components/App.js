import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import GithubFetchInfo from './GithubFetchInfo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <GithubFetchInfo/>
      </Provider>
    );
  }
}export default App;
