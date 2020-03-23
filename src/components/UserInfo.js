import React from "react";

const UserInfo = props => {
    return (
        <div className="user-info">
            <div className="avatar">
                <img src={props.user.avatar_url} alt="avatar" width="250px" />
            </div>
            <div className="content">
                <h1>{props.user.name}</h1>
                <h2>{props.user.login}</h2>
                <p>
                    <strong>Bio: </strong>
                    {props.user.bio}
                </p>
                <p>
                    <strong>Company:</strong> {props.user.company}
                </p>
                <button>Back</button>
            </div>
           
        </div>
    );
};

export default UserInfo;