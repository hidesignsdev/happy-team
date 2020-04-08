import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { myInput } from './RenderField'
import user from '../assets/user.png'
import { validate } from '../common/ValidationForm'

const SignUpForm = (props) => {
    const { handleSubmit } = props
    return (

        <div className=" center">
            <img src={user} alt="userimg"/>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>First name</label>
                    <Field name="firstName" type="text" component={myInput} placeholder="jin-young" className="form-control" />
                </div>
                <div className="field">
                    <label>Last name</label>
                    <Field name="lastName" type="text" component={myInput} placeholder="Park" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <Field name="email" type="email" component={myInput} placeholder="Email..." className="form-control" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <Field name="password" type="password" component={myInput} placeholder="Enter your password..." />
                </div>
                <div className="field">
                    <label>Comfirm your password</label>
                    <Field name="comfirmPassword" type="password" component={myInput} placeholder="Re-enter your password" className="form-control" />
                </div>
                <div className="btn-signup">               
                        <button type="submit">Sign Up</button>
                </div>
                <div className="link-to-login">
                    <p  >Already have account?<a href="/">log in</a></p>
                </div>
            </form>
        </div>
    )
}
export default reduxForm({ form: 'signup',validate })(SignUpForm)