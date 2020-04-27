import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {logOut} from '../containers/login/actions'
import { isEmpty } from "lodash";

class Profile extends Component {
  signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.props.logOut()
  };
  render() {
    const { data } = this.props.loginForm;
    const dataUpdateProfile = this.props.updateProfile.data;
    // console.log("Profile -> render -> dataUpdateProfile", dataUpdateProfile);

    let name;
    let avatarUrl;
    if (!isEmpty(data)) {
      name = data.firstName + " " + data.lastName;
      avatarUrl = data.avatarUrl ? data.avatarUrl : null;
    }
    if (!isEmpty(dataUpdateProfile)) {
      name = dataUpdateProfile.firstName + " " + dataUpdateProfile.lastName;
      avatarUrl = dataUpdateProfile.avatarUrl
        ? dataUpdateProfile.avatarUrl
        : null;
    }

    return (
      <div>
        <div className=" center">
          <div className="header">
            <img src={avatarUrl} alt="" className="user-avatar" />
            <h3 className="yourname"> {name} </h3>
            <br />
            <div className="profile">
              <div className="view-changepass-profile">
                <span>View profile</span>
                <i className="fas fa-angle-right right-arrow"></i>
              </div>
              <div className="view-changepass-profile">
                <span>Change Password</span>
                <i className="fas fa-angle-right right-arrow"></i>
              </div>
              <div className="logout">
                <span>
                  <a href="/" onClick={this.signout} className="sign-out">
                    Sign Out
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginForm: state.login,
    updateProfile: state.updateProfile,
  };
};
const mapDispatchToProps =(dispatch) =>{
  return{
      logOut:()=>{dispatch(logOut())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
