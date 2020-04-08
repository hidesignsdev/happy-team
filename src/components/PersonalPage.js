import React, { Component } from 'react'
import PersonalForm from '../form/PersonalForm'
import { withRouter } from 'react-router-dom'
class PersonalPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
        this.props.history.push("/congratulations")
    }
    render() {
        return <PersonalForm onSubmit={this.submit} />
    }
}
export default withRouter(PersonalPage)
