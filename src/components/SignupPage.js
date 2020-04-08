import React, { Component } from 'react'
import SignupForm from '../form/SignupForm'
import {withRouter} from 'react-router-dom'

class SignupPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
        this.props.history.push("/signup-final")
    }
    render() {
        return <SignupForm onSubmit={this.submit} />
    }
}
export default withRouter(SignupPage)
