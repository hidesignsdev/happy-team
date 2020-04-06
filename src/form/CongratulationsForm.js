import React from 'react';
import { reduxForm } from 'redux-form';
import userPhoto from '../assets/userPhoto.png'

const CongratulationsForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            < img className="userPhoto" src={userPhoto} alt="userPhoto" />
            <div className="form-field">
                <h3 className="text-center">{"Congratulations!"}</h3>
                <p className="text-center">{"Your account has been created successfully"}</p>
                <button className="btn btn-block btn-primary">OK</button>
            </div>
        </form>
    )
}
export default reduxForm({ form: 'personal-info' })(CongratulationsForm)