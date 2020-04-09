import React, { Component } from 'react'
import SignupForm from '../form/SignupForm'
import { withRouter } from 'react-router-dom'
import _ from "lodash";
import axios from 'axios'
async function signupApi(data) {
    try {
        let response = await axios({
            method: 'post',
            url: 'https://api.korec-dev.scrum-dev.com/api/functions/userSignup',
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
                'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
            },
            data: JSON.stringify(data),
        });
        // let result = response.json();
        return response;
    } catch (error) {
        console.error(error);
    }
}



class SignupPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
        const summitData = _.omit(values, 'confirmPassword');
        const result = signupApi(summitData);
        console.log("sign-up", result)
        // this.props.history.push("/signup-final")
    }
    render() {
        return <SignupForm onSubmit={this.submit} />
    }
}
export default withRouter(SignupPage)
