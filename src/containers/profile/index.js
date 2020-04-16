import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import userPhoto from '../../assets/userPhoto.png'
import _ from "lodash";



class Profile extends Component {

    signout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }
    render() {
        const { data } = this.props.loginForm;
        let name;
        let avatarUrl;
        if (!_.isEmpty(data)) {
            name = data.result.firstName + " " + data.result.lastName;
            avatarUrl = data.avatarUrl ? data.avatarUrl : userPhoto;     
        } else { 
            name = localStorage.getItem('username')
            avatarUrl = userPhoto;
        }
        return (
            <div>
                <div className=" center">

                    <img src={avatarUrl} alt="userPhoto" />
                    <h3 className="yourname" >{name}</h3>
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
                            <span><a href="/" onClick={this.signout}>Sign Out</a></span>
                        </div>
                    </div>

                </div>
                {/* Footer */}
                <div className="footer">
                    <footer className="page-footer font-small indigo">
                        <div className=" text-center text-md-left">
                            <div className="row ">
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
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return { loginForm: state.login }
}
export default connect(mapStatetoProps, null)(withRouter(Profile));