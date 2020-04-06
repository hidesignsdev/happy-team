import React from 'react';
import { reduxForm } from 'redux-form';
import user from '../assets/user.png'
const ProfileForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <div className=" center">
                <form onSubmit={handleSubmit}>
                    <img src={user} />
                    <div className="profile">
                        <div className="view-changepass-profile">
                            <span>View profile</span>
                        </div>
                        <div className="view-changepass-profile">
                            <span>Change Password</span>

                        </div>
                        <div className="logout">
                            <span><a href="/">Sign Out</a></span>
                        </div>
                    </div>


                </form>
            </div>
            {/* Footer */}
            <div className="footer">
                <footer className="page-footer font-small indigo">
                    <div className="container text-center text-md-left">
                        <div className="row">
                            <div className="col-3 ">
                                <h5 className="font-weight-bold mt-3 mb-4"><i className="fas fa-home"></i></h5>
                            </div>

                            <div className="col-3 ">
                                <h5 className="font-weight-bold  mt-3 mb-4"><i className="fas fa-user-plus"></i></h5>
                            </div>

                            <div className="col-3 ">
                                <h5 className="font-weight-bold  mt-3 mb-4"><i className="fas fa-bell"></i></h5>
                            </div>

                            <div className="col-3 ">
                                <h5 className="font-weight-bold  mt-3 mb-4"><i className="fas fa-user-circle"></i></h5>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* Footer */}
        </div>
    )
}

export default reduxForm({ form: 'profile' })(ProfileForm)