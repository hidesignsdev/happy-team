import React, { Component } from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
export default class App extends Component {
  render() {
    return (
      <div className="form-group">
        <LoginPage />
      </div>
    )
  }
}
