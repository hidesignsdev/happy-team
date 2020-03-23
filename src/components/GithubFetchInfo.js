import React, { Component } from 'react';
import { fetchGithubAcc } from '../actions';
import {connect} from 'react-redux'

class GithubFetchInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:""
        }
    }
    isChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleFetch=()=>{
        this.props.fetchingGithubInfo(this.state.username)
    }
 

    render() {
        let githubAccount=this.props.data
        console.log('account detail:',githubAccount);
        console.log(this.props.loading)
        return (
            <div>
                   <input type="text" placeholder="Enter Username" onChange={(event)=>{this.isChange(event)}}/>
                    <button onClick={this.handleFetch}>Fetch</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.githubFetch.data,
        loading:state.githubFetch.loading
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchingGithubInfo: (username) => {
            dispatch(fetchGithubAcc(username))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GithubFetchInfo)
