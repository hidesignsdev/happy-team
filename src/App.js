import React, { Component } from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PersonalPage from './components/PersonalPage'
import ProfilePage from './components/ProfilePage'
import CongratulationsPage from './components/CongratulationsPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div >
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
            <Route path="/congratulations">
              <CongratulationsPage />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
