import React, { Component } from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
import Signup from './containers/signup'
import PersonalPage from './components/PersonalPage'
import ProfilePage from './components/ProfilePage'
import CongratulationsPage from './components/CongratulationsPage'
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export default class App extends Component {
  render() {
    return (
      <div >
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/">
                <LoginPage history={history} />
              </Route>
              <Route path="/signup">
                <Signup history={history} />
              </Route>
              <Route path="/signup-final">
                <PersonalPage history={history} />
              </Route>
              <Route path="/profile">
                <ProfilePage history={history} />
              </Route>
              <Route path="/congratulations">
                <CongratulationsPage history={history} />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    )
  }
}
