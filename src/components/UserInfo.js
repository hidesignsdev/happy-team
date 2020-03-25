import React from "react";

const UserInfo = props => {
    return (
        <div className="user-info">
            <div className="avatar">
                <img src={props.user.avatar_url} alt="avatar" />
            </div>
            <div className="content">
                <h3>{props.user.name}</h3>
                <h4>{props.user.login}</h4>
                <p><strong>Bio: </strong>{props.user.bio} </p>
                <p><strong>Company:</strong> {props.user.company}</p>
            </div>
            <button className="buttonback" onClick={props.click}>Back</button>
        </div>
    );
};

export default UserInfo;