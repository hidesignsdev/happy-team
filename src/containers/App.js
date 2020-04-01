import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import GithubInfo from '../components/GithubInfo';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <GithubInfo/>
      </Provider>
    );
  }
}export default App;

