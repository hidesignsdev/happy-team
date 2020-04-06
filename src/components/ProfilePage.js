
import ProfileForm from '../form/ProfileForm';
import React, { Component } from 'react';

class ProfilePage extends Component {
    render() {
        return (
            <div className="container">
                <ProfileForm onSubmit={this.submit}/>
            </div>
        );
    }
}

export default ProfilePage;