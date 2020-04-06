import React, { Component } from 'react'
import SignupForm from '../form/SignupForm'
class SignupPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
    render() {
        return <SignupForm onSubmit={this.submit} />
    }
}
export default SignupPage
