import React , { Component } from 'react';
import { connect } from 'react-redux'
import UserInfo from './components/UserInfo';
import { getGithubInfo, clearInfo } from './actions';

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    this.props.getGithubInfo(username);
    this.getUsername.value = "";
  }
  render() {
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
          <UserInfo click={this.props.clearInfo} user={this.props.data.userData.data} />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.dataReducer
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getGithubInfo: (username) => dispatch(getGithubInfo(username)),
    clearInfo: () => { dispatch(clearInfo()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);