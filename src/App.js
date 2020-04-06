import React, { Component } from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PersonalPage from './components/PersonalPage'
import ProfilePage from './components/ProfilePage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="form-group">
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/signup-final">
              <PersonalPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
