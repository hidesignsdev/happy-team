import React, { Component } from 'react'
import PersonalForm from '../form/PersonalForm'
class PersonalPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
    render() {
        return <PersonalForm onSubmit={this.submit} />
    }
}
export default PersonalPage
