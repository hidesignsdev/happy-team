import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { myInput } from './RenderField'
import user from '../assets/user.png'


const PersonalForm = (props) => {
    const { handleSubmit } = props
    return (

        <div className=" center">
            <img src={user} />
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Gender</label>
                    <div  >
                        <Field className="select-gender" name="gender" component="select" >
                            <option />
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Field>
                    </div>
                </div>
                <div className="field">
                    <label>Birthday</label>
                    <Field name="password" type="date" component={myInput} placeholder="Enter your password..." />
                </div>
                {/* <button className="next-btn" type="submit">Next</button>s */}
                
                <button type="button" className="btn btn-primary btn-next">Next</button>
            </form>
        </div>
    )
}
export default reduxForm({ form: 'login' })(PersonalForm)