import React, { Component } from 'react'
import './App.css';
import Login from './containers/login'
import Signup from './containers/signup'
import PersonalPage from './containers/profile'
import Account from './components/Account'
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
                <Login history={history} />
              </Route>
              <Route path="/signup">
                <Signup history={history} />
              </Route>
              <Route path="/signup-final">
                <PersonalPage history={history} />
              </Route>
              <Route path="/Account">
                <Account history={history} />
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
