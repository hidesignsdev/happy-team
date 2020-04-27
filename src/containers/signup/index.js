import React, { Component } from "react";

import { connect } from "react-redux";
import { signUp } from "./actions";
import { withRouter } from "react-router-dom";
import { myInput } from "../../components/RenderField";
import user from "../../assets/user.png";

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required('First name is required'),
    lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required('Last name is required'),
    email: Yup.string()
        .email("Username must be a valid email address")
        .min(6, 'Username must be at least 6 characters')
        .required('Password is required'),
    password: Yup.string()
        .matches(/^(?=.*[A-Z])[a-zA-Z\d]{6,}$/,'*Must be at least 6 characters and at least one letter and one number')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password mismatched')
        .required('Confirmpassword is required')
})

class Signup extends Component {
    state = {
        isPasswordShown: false,
    };
    togglePasswordVisibility = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };
    submit = (values) => {
        this.props.signUp(values);
    };
    render() {
        const { isPasswordShown } = this.state;
        const { loading, success, error } = this.props.signupForm;
        if (success === true) {
            this.props.history.push("/signup-final");
        }

        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={this.submit}
            >
                <div className=" center">
                    <img src={user} alt="userimg" />
                    <Form >
                        <div className="field">
                            <label>First name</label>
                            <Field
                                name="firstName"
                                type="text"
                                component={myInput}
                                placeholder="jin-young"
                                className="form-control"
                            />
                            <ErrorMessage name="firstName" component="div" className="errorMessage" />
                        </div>
                        <div className="field">
                            <label>Last name</label>
                            <Field
                                name="lastName"
                                type="text"
                                component={myInput}
                                placeholder="Park"
                            />
                            <ErrorMessage name="lastName" component="div" className="errorMessage" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <Field
                                name="email"
                                type="email"
                                component={myInput}
                                placeholder="Email..."
                                className="form-control"
                            />
                            <ErrorMessage name="email" component="div" className="errorMessage" />
                        </div>
                        <div className="div-hidden-password">
                            <div className="field">
                                <label>Password</label>
                                <Field
                                    name="password"
                                    type={isPasswordShown ? "text" : "password"}
                                    component={myInput}
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    placeholder="Enter your password..."
                                />
                                <ErrorMessage name="password" component="div" className="errorMessage" />
                            </div>
                            <i
                                className="fa fa-eye password-icon"
                                onClick={this.togglePasswordVisibility}
                            />
                        </div>
                        <div className="field">
                            <label>Confirm your password</label>
                            <Field
                                name="confirmPassword"
                                type="password"
                                component={myInput}
                                placeholder="Re-enter your password"
                                className="form-control"
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="errorMessage" />
                        </div>
                        <div className="btn-signup">
                            {loading ? (
                                <button className="btn btn-primary" disabled>
                                    <span className="spinner-grow spinner-grow-sm"></span>
                Loading..
                                </button>
                            ) : (
                                    <button type="submit" className="btn btn-primary">
                                        Sign Up
                                    </button>
                                )}
                        </div>
                        {error ? (
                            <span className="alert-danger">
                                <i className="fas fa-exclamation-triangle"></i>
                                {error}
                            </span>
                        ) : null}
                        <div className="bottom">
                            <p>
                                Already have account?<a href="/">log in</a>
                            </p>
                        </div>
                    </Form>
                </div>
            </Formik>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        signupForm: state.signup,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (values) => dispatch(signUp(values)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
