import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signUp } from './actions'
import { withRouter } from 'react-router-dom'
import { myInput } from '../../form/RenderField'
import user from '../../assets/user.png'
import { validate } from '../../common/ValidationForm'

class Signup extends Component {

    state = {
        isPasswordShown: false
    }
    togglePasswordVisibility = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    }
    submit = values => {
        this.props.signUp(values)
        // console.log(values)
        this.props.history.push("/signup-final")
    }
    render() {
        const { isPasswordShown } = this.state
        const { handleSubmit } = this.props
        return (
            <div className=" center">
                <img src={user} alt="userimg" />
                <form onSubmit={handleSubmit(this.submit)}>
                    <div className="field">
                        <label>First name</label>
                        <Field
                            name="firstName"
                            type="text"
                            component={myInput}
                            placeholder="jin-young"
                            className="form-control" />
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <Field
                            name="lastName"
                            type="text"
                            component={myInput}
                            placeholder="Park" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <Field
                            name="email"
                            type="email"
                            component={myInput}
                            placeholder="Email..."
                            className="form-control" />
                    </div>
                    <div className="div-hidden-password">
                        <div className="field">
                            <label>Password</label>
                            <Field
                                name="password"
                                type={(isPasswordShown) ? "text" : "password"}
                                component={myInput}
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                placeholder="Enter your password..." />
                        </div>
                        <i className="fa fa-eye password-icon" onClick={this.togglePasswordVisibility} />
                    </div>
                    <div className="field">
                        <label>Confirm your password</label>
                        <Field
                            name="confirmPassword"
                            type="password"
                            component={myInput}
                            placeholder="Re-enter your password"
                            className="form-control" />

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
}

Signup = reduxForm({
    form: 'signup',
    validate
})(Signup)

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (values) => dispatch(signUp(values))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Signup));