import React, { Component } from 'react';
import RandomQuote from './components/RandomQuote'
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';


//
const action=()=>{
  return {
    type: 'Click',
    quote:this.props.quote,
    author:this.props.author,
    color:this.props.color
    
  }
}

//Perform an action 'Click' and return a new state
const reducer =(state,action)=>{
  switch(action.type){
    case 'Click':
      return{
        color:action.color,
        author:action.author,
        quote:action.quote
      }
      default : return state;
  }
}

//store storage of a reducer
const store = createStore(reducer);


const mapStateToProps=(state)=>{
  return state;
}
const mapDispatchToProps =(dispatch)=>{
  return {
    onClick: () =>{
      dispatch(action());
    }
  }
}
const Contain = connect(mapStateToProps, mapDispatchToProps)(RandomQuote);
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <Contain/>
          </Provider>
      </div>
    );
  }
}
export default App;
