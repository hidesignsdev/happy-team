import React from "react";
import CongratulationsForm from '../form/CongratulationsForm';
import { withRouter } from 'react-router-dom'
class Congratulations extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
        this.props.history.push("/profile")
    }
    render() {
     
        return (
            <div className="container">
                <CongratulationsForm onSubmit={this.submit} />
            </div>
        );
    }
}
export default withRouter(Congratulations)