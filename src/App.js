import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchGithubInfo} from './actions';
import UserInfo from './components/UserInfo'
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    this.props.fetchGithubInfo(username);
    this.getUsername.value = "";
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Enter the Github Username</h2>
          <input
            type="text"
            placeholder="Enter Github Username"
            required
            ref={input => (this.getUsername = input)}
          />
          <button className="button">Fetch</button>
        </form>
        {this.props.data.loading ? <h3>Loading...</h3> : null}
        {this.props.data.error ? (
          <h3 className="error">No such User exists.</h3>
        ) : null}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <UserInfo user={this.props.data.userData} />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    fetchGithubInfo:(username) =>dispatch(fetchGithubInfo(username))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

