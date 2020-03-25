import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGithubInfo, clearInfo } from './actions';
import UserInfo from './components/UserInfo';


class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    this.props.fetchGithubInfo(username);
    this.getUsername.value = "";
  }
  render() {
    console.log(this.props.data)
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 >Enter the Github Username</h2>
          <div>
            <input
              type="text"
              placeholder="Ex: gaearon"
              required
              ref={input => (this.getUsername = input)}
            />
          </div>
          <button className="buttonfetch">Fetch</button>
        </form>
        {this.props.data.loading ? <h3>Loading...</h3> : null}
        {this.props.data.error ? <h3 >No such User exists.</h3> : null}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <UserInfo click={this.props.clearInfo} user={this.props.data.userData} />
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
const mapDispatchToProps = dispatch => {
  return {
    fetchGithubInfo: (username) => dispatch(fetchGithubInfo(username)),
    clearInfo: () => { dispatch(clearInfo()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

