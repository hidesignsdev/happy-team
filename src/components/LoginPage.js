import React, { Component } from 'react'
import LoginForm from '../form/LoginForm'
import {withRouter} from 'react-router-dom'
class LoginPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
        this.props.history.push("/profile")
    }
    render() {
        return <LoginForm onSubmit={this.submit} />
    }
}
export default withRouter(LoginPage)
