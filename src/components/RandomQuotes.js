import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchQuotes, newQuote } from '../redux/actions/index';
import Loading from './Loading';
import '../style/style.css';

class RandomQuotes extends Component {
  constructor() {
    super();
   
  }

  render() {

  <Loading />;
    
  
    return (
      <div className="wrapper" >
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left"> </i>
            <q id="text">
            </q>
          </div>
          <div className="quote-author">
            -<span id="author"> </span>
          </div>
          <div className="buttons">
            <a
        
            >
              TWEET
            </a>
            <button
              className="button"
              id="new-quote"
            >
              NEW QUOTE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   // const { quotes = {} } = state
//   quotes: state.quotes.data,
//   randomNumber: state.quotes.randomNumber,
//   loading: state.quotes.loading,
//   randomColor: state.quotes.colors,
//   }
// };

export default RandomQuotes;
