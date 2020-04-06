import React from "react";
import ProfileForm from '../form/ProfileForm';

class ProfilePage extends React.Component {
    submit = values => {  
        console.log(values);
    }
    render() {
        return (      
                <ProfileForm onSubmit={this.submit} />
        );
    }
}
export default ProfilePage
