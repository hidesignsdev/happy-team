import React, { Component } from 'react'
import LoginForm from '../form/LoginForm'
class LoginPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)

    }
    render() {
        return <LoginForm onSubmit={this.submit} />
    }
}
export default LoginPage
