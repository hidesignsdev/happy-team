// import React, { Component } from 'react'
// import { Field, reduxForm } from 'redux-form'
// import { myInput } from '../../form/RenderField'
// import user from '../../assets/user.png'
// import { validate } from '../../common/ValidationForm'
// import requestSignup from './actions'
// import { connect } from 'react-redux'

// class Signup extends Component {
//     submit = (values) => {
//         // this.props.requestSignup(values)
//         console.log("123", values)
//     }
//     render() {
//         const {
//             requesting,
//             success,
//             errors,
//             messages
//         } = this.props.signup
//         return (
//             <div className=" center">
//                 <img src={user} alt="userimg" />
//                 <form onSubmit={this.props.handleSubmit(this.submit)}>
//                     <div className="field">
//                         <label>First name</label>
//                         <Field name="firstName" type="text" component={myInput} placeholder="jin-young" className="form-control" />
//                     </div>
//                     <div className="field">
//                         <label>Last name</label>
//                         <Field name="lastName" type="text" component={myInput} placeholder="Park" />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <Field name="email" type="email" component={myInput} placeholder="Email..." className="form-control" />
//                     </div>
//                     <div className="field">
//                         <label>Password</label>
//                         <Field name="password" type="password" component={myInput} placeholder="Enter your password..." />
//                     </div>
//                     <div className="field">
//                         <label>Confirm your password</label>
//                         <Field name="confirmPassword" type="password" component={myInput} placeholder="Re-enter your password" className="form-control" />
//                     </div>
//                     <div className="btn-signup">
//                         <button type="submit">Sign Up</button>
//                     </div>
//                     <div className="link-to-login">
//                         <p  >Already have account?<a href="/">log in</a></p>
//                     </div>
//                 </form>
//                 {/* <div className="auth-messages">
//                     {!!messages.length && (<Messages messages={messages} />)}
//                     {!!errors.length && (<Errors errors={errors} />)}
//                     {!requesting && (<div>Please login: <Link to="/login">Login</Link></div>)}
//                 </div> */}
//             </div>
//         )
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         signup: (values) => dispatch(requestSignup(values))
//     }
// }

// const connected = connect(null,mapDispatchToProps)(Signup)

// const formed = reduxForm({
//     form: 'signup',
//     validate
// })(connected)

// export default formed
