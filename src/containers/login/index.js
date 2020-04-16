import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { logIn } from './actions'
import { withRouter } from 'react-router-dom'
import { myInput } from '../../form/RenderField'
import user from '../../assets/user.png'
import { validate } from '../../common/ValidationForm'

class Login extends Component {
    submit = values => {
        this.props.logIn(values) 
    }
    render() {
        const { success } = this.props.loginForm
        if (success === true) {
            this.props.history.push("/profile")
        }
        const { handleSubmit } = this.props
        return (
            <div className=" center">
                <img src={user} alt="userImg" />
                <form onSubmit={handleSubmit(this.submit)}>
                    <div className="field">
                        <label>Email</label>
                        <Field
                            name="username"
                            type="email"
                            component={myInput}
                            placeholder="Email..."
                            className="form-control"
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <Field
                            name="password"
                            type="password"
                            component={myInput}
                            placeholder="Enter your password..." />
                    </div>
                    <label className="forgot-password">
                        <a href="/">Forgot your password?
                    </a></label>
                    <button type="submit">Sign In</button>
                    <div className="link-to-signup">
                        <p  >Don't have account?<a href="/signup">Sign up</a></p>
                    </div>
                </form>
            </div>
        )
    }
}
Login = reduxForm({
    form: 'login',
    validate
})(Login)
const mapStateToProps = (state) => {
    return {
        loginForm: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (values) => dispatch(logIn(values))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));