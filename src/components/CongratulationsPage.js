import React from "react";
import CongratulationsForm from '../form/CongratulationsForm';

class Congratulations extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log(values)

    }
    render() {
        return (
            <div className="container">
                <CongratulationsForm onSubmit={this.submit} />
            </div>
        );
    }
}
export default Congratulations