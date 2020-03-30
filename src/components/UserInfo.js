import React,{Component} from "react";

class UserInfo extends Component {
    render(){
        return(
            <div className="user-info">
            <div className="avatar">
                <img src={this.props.user.avatar_url} alt="avatar" />
            </div>
            <div className="content">
                <h3>{this.props.user.name}</h3>
                <h4>{this.props.user.login}</h4>
                <p><strong>Bio: </strong>{this.props.user.bio} </p>
                <p><strong>Company:</strong> {this.props.user.company}</p>
            </div>
            <button className="buttonback" onClick={this.props.click}>Back</button>
        </div>
        )
    }
}
export default UserInfo;