import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { myInput } from "../../components/RenderField";

import { FILE_SIZE, SUPPORTED_FORMATS } from "./constants";
import { updateProfileRequest } from "./action";
import ImageUpload from "../../components/ImageUpload";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
  file: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  gender: Yup.string().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
});

class PersonalPage extends Component {
  submit = (values) => {
    this.props.updateProfile(values);

    console.log(values);
  };
  render() {
    const { success, error, loading } = this.props.updateInfo;

    if (success === true) {
      this.props.history.push("/congratulations");
    }

    return (
      <Formik
        initialValues={{
          file: null,
          gender: "",
          dateOfBirth: "",
        }}
        validationSchema={ProfileSchema}
        onSubmit={this.submit}
      >
        <Form>
          <div className=" center">
            <div className="header">
              <h3>Personal Information</h3>
              <Field name="file" component={ImageUpload} />
              <ErrorMessage
                  name="file"
                  component="div"
                  className="errorMessage"
                />
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
              <Field name="dateOfBirth" type="date" component={myInput} />
              <ErrorMessage name="dateOfBirth" component="div"className="errorMessage"
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
          </div>
        </Form>
      </Formik>
    );
  }
}

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
