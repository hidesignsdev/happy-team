import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { myInput } from './RenderField'
import user from '../assets/user.png'

const PersonalForm = (props) => {
    const { handleSubmit } = props
    return (
        <div className=" center">
            <img src={user} alt="userPhoto" />
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Gender</label>
                    <div  >
                        <Field className="field-input" name="gender" type="select" component="select" >
                            <option />
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Field>
                    </div>
                </div>
                <div className="field">
                    <label>Birthday</label>
                    <Field  name="dateOfBirth" type="date" component={myInput} />
                </div>
                {/* <button className="next-btn" type="submit">Next</button>s */}
                <button type="submit" className="btn btn-primary btn-next">Next</button>
            </form>
        </div>
    )
}
export default reduxForm({ form: 'signup-final' })(PersonalForm)