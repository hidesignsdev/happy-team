import React, { Component } from 'react';
import { fetchGithubAcc, clearData } from '../actions';
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import '../../src/App.css'


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
    clearData = () => {
        this.props.clearData()
    }

    render() {
        let githubAccount = this.props.data
        let loading = this.props.loading
        let fetchFailure=this.props.fetchError
    

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group mt-4 text-center">
                            <i className="fab fa-github">&ensp;
                            <label >Github Fetching Account </label></i>
                            <input type="text" className="form-control" placeholder="Enter Username" onChange={(event) => { this.isChange(event) }} />
                        </div>
                        <button className="btn btn-block btn-dark" onClick={this.handleFetch}>Fetch</button>
                        <br />
                        {
                        loading ?
                            <div className="center">
                                <div className="loader mt-3 ">
                                </div>
                        </div> : null
                        }
                    </div>
                    <div className="col-2 center">
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                    
                    {!isEmpty(githubAccount) ?

                        <div className="col-6">
                            <div className="card-deck mt-4 border">
                                <img className="card-img-top" src={githubAccount.avatar_url} alt="avartar" />
                                <div className="card-body">
                                    <h4 className="card-title">{githubAccount.name}</h4>
                                    <h6 className="card-tile">{githubAccount.login}</h6>
                                    <p className="card-text">{githubAccount.bio}</p>
                                    <span className="row ml-1">
                                        <i className="fas fa-users"></i><p className="card-text">{githubAccount.company}</p>
                                    </span>

                                    <button type="button" className="btn btn-secondary btn-block" onClick={this.clearData}>Back</button>

                                </div>
                            </div>
                        </div>
                        :  fetchFailure? <h3 className="center mt-3">User not found</h3>:
                        <div className="result">The result will appear hear:</div>
                        
                        }


                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.githubFetch.data,
        loading: state.githubFetch.loading,
        fetchError:state.githubFetch.error
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({

    fetchingGithubInfo: (username) => dispatch(fetchGithubAcc(username)),
    clearData: () => dispatch(clearData())
})
export default connect(mapStateToProps, mapDispatchToProps)(GithubFetchInfo)
