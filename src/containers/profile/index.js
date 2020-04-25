import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { myInput } from "../../form/RenderField";

import { required } from "../../common/ValidationForm";
import { updateProfileRequest } from "./action";
import ImageUpload from "../../components/ImageUpload";
class PersonalPage extends Component {
  submit = (values) => {
    this.props.updateProfile(values);

    console.log(values);
  };
  render() {
    const { handleSubmit } = this.props;
    const { success, error, loading } = this.props.updateInfo;

    if (success === true) {
      this.props.history.push("/congratulations");
    }

    return (
      <div className=" center">
        <form onSubmit={handleSubmit(this.submit)}>
          <div className="header">
            <h3>Personal Information</h3>
            <Field name="file" component={ImageUpload} />
          </div>
          <label>Gender</label>
          <div>
            <Field
              className="field-input"
              name="gender"
              type="select"
              component="select"
            >
              <option />
              <option value="男性">男性</option>
              <option value="女性">女性</option>
              <option value="その他">その他</option>
            </Field>
          </div>

          <div className="field">
            <label>Birthday</label>
            <Field
              name="dateOfBirth"
              type="date"
              component={myInput}
              validate={required}
            />
          </div>
          {loading ? (
            <button className="btn btn-primary" disabled>
              <span className="spinner-grow spinner-grow-sm"></span>
              Loading..
            </button>
          ) : (
            <button type="submit" className="btn btn-primary btn-next">
              Next
            </button>
          )}
          {error ? (
            <span className="alert-danger">
              <i className="fas fa-exclamation-triangle"></i>
              {error}
            </span>
          ) : null}
        </form>
      </div>
    );
  }
}
PersonalPage = reduxForm({
  form: "signup-final",
})(PersonalPage);

const mapStateToProps = (state) => {
  return {
    updateInfo: state.updateProfile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (values) => dispatch(updateProfileRequest(values)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalPage));
