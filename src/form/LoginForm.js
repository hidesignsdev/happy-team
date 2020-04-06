import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { myInput } from './RenderField'
import user from '../assets/user.png'


const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
      
        <div className=" center">
            <img  src={user}/>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email</label>
                    <Field name="email" type="email" component={myInput} placeholder="Email..." className="form-control" />
                </div>
                <div>
                    <label>Password</label>
                  
                    <Field name="password" type="password" component={myInput} placeholder="Enter your password..." />
                </div>
                <label className="forgot-password"><a href="#">Forgot your password?</a></label>
                <button type="submit">Sign In</button>
                <div className="link-signup">
                    <p  >Don't have account?<a href="#">Sign up</a></p>
                </div>
            </form>
        </div>
    )
}
export default reduxForm({ form: 'login' })(LoginForm)