import React, { Component } from "react";

import { connect } from "react-redux";
import { logIn } from "./actions";
import { withRouter } from "react-router-dom";
import { myInput } from "../../components/RenderField";
import user from "../../assets/user.png";

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'


const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .email("Must be a valid email address")
        .min(6, 'must be at least 6 characters')
        .required('Password is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
})

class Login extends Component {
    submit = (values) => {
        this.props.logIn(values);
        console.log("values", values);
    };
    render() {
        const { success, requesting, error } = this.props.loginForm;
        if (success === true) {
            this.props.history.push("/account");
        }
        return (
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={this.submit}
            >
                <div className=" center">
                    <img src={user} alt="userImg" />

                    <Form >
                        <div className="field">
                            <label>Email</label>
                            <Field
                                name="username"
                                type="email"
                                component={myInput}
                                placeholder="Email..."
                                className="form-control"
                            />
                            <ErrorMessage name="username" component="div" className="errorMessage" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <Field
                                name="password"
                                type="password"
                                component={myInput}
                                placeholder="Enter your password..."
                            />
                             <ErrorMessage name="password" component="div" className="errorMessage" />
                        </div>
                        {/* check error */}
                        {error ? (
                            <span className="alert-danger">
                                <i className="fas fa-exclamation-triangle"></i>
                                {error}
                            </span>
                        ) : null}
                        <label className="forgot-password">
                            <a href="/">Forgot your password?</a>
                        </label>
                        {/* Loading before login */}
                        {requesting ? (
                            <button className="btn btn-primary" disabled>
                                <span className="spinner-grow spinner-grow-sm"></span>
              Loading..
                            </button>
                        ) : (
                                <button type="submit">Sign In</button>
                            )}
                        <div className="bottom">
                            <p>
                                Don't have account?<a href="/signup">Sign up</a>
                            </p>
                        </div>
                    </Form>
                </div>
            </Formik>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm: state.login,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (values) => dispatch(logIn(values)),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
