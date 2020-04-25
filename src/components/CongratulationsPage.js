import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import userPhoto from "../assets/userPhoto.png";

class Congratulations extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push("/profile");
  };
  render() {
    const { data } = this.props.updateProfile;
    let avatarUrl;
    if (!isEmpty(data)) {
      avatarUrl = data.avatarUrl ? data.avatarUrl : userPhoto;
    } else {
      avatarUrl = userPhoto;
    }
    return (
      <div className="center">
        <form className="header">
          <img className="userPhoto" src={avatarUrl} alt="userPhoto" />
          <div className="form-field">
            <h3 className="text-center">{"Congratulations!"}</h3>
            <p className="text-center">
              {"Your account has been created successfully"}
            </p>
            <button
              onClick={this.handleClick}
              className="btn btn-primary"
            >
              OK
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    updateProfile: state.updateProfile,
  };
};
export default connect(mapStatetoProps, null)(withRouter(Congratulations));
