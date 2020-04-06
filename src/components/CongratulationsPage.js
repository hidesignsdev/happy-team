import React from "react";
import CongratulationsForm from '../form/CongratulationsForm';

class Congratulations extends React.Component {
    render() {
        return (
            <div className="container">
                <CongratulationsForm onSubmit={this.submit}/>
            </div>
        );
    }
}
export default Congratulations