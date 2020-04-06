
import React from 'react';
import { reduxForm } from 'redux-form';
import userPhoto from '../assets/userPhoto.png'
const ProfileForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            < img className="userPhoto rounded-circle" src={userPhoto} alt="userPhoto" />
            <h3>Park JinYoung</h3>
            <div className="form-field">
                <div className="profile">
                    <span>View profile</span>
                    <i class="fas fa-angle-right"></i>
                </div>
                <div className="profile">
                    <span>Change Password</span>
                    <i class="fas fa-angle-right"></i>
                </div>
                <div>
                    <span><a href="/" className="sign-out">{"Sign Out"}</a></span>
                </div>
            </div>
            <div className="footer">
                {/* Footer */}
                <footer className="page-footer font-small indigo">
                    <div className="container text-center text-md-left">
                        <div className="row">
                            <div className="col-3 ">
                                <h5 className="mt-3 mb-4"><i className="fas fa-home"></i></h5>
                            </div>

                            <div className="col-3 ">
                                <h5 className=" mt-3 mb-4"><i className="fas fa-user-plus"></i></h5>
                            </div>

                            <div className="col-3 ">
                                <h5 className="  mt-3 mb-4"><i className="fas fa-bell"></i></h5>
                            </div>

                            <div className="col-3 ">
                                <h5 className=" mt-3 mb-4"><i className="fas fa-user-circle"></i></h5>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer */}
            </div>
        </form>
    )
}
export default reduxForm({ form: 'account' })(ProfileForm)