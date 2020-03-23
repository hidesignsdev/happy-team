import React, { Component } from 'react';
import { fetchGithubAcc } from '../actions';
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

class GithubFetchInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    isChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleFetch = () => {
        this.props.fetchingGithubInfo(this.state.username)
    }


    render() {
        let githubAccount = this.props.data
        console.log('account detail:', githubAccount);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group mt-4">
                            <label for="exampleInputEmail1">Github Fetching Account </label>
                            <input type="text" className="form-control" placeholder="Enter Username" onChange={(event) => { this.isChange(event) }} />
                        </div>
                        <button className="btn btn-block btn-dark" onClick={this.handleFetch}>Fetch</button>
                    </div>
                    {!isEmpty(githubAccount) ?

                        <div className="col-8">
                            <div className="card-deck mt-4">
                                <img className="card-img-top" src={githubAccount.avatar_url} alt="avartar" />
                                <div className="card-body">
                                    <h4 className="card-title">{githubAccount.name}</h4>
                                    <h6 className="card-tile">{githubAccount.login}</h6>
                                    <p className="card-text">{githubAccount.bio}</p>
                                    <span className="row ml-1">
                                    <i class="fas fa-users"></i>  <p className="card-text">{githubAccount.company}</p>
                                    </span>
                                    
                                    <button type="button" className="btn btn-secondary btn-block"onClick={this.clearData}>Back</button>

                                </div>
                            </div>


                        </div>
                        : <div className="mt-4">
                            <label >The result of fetching :</label>
                            <p>No data found </p>
                        </div>}


                </div>

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
