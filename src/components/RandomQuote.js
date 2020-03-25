import React, { Component } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux';
import { newQuote } from '../actions'
import quotes from '../quotes.json'


class RandomQuote extends Component {
    componentDidMount() {
        this.props.nextQuote(this.getQuote())
    }
    getQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)]
    }
    nextQuote = () => {
        this.props.nextQuote(this.getQuote())
    }

    render() {
      
        return (
            <div id='wrapper'>
                <h1 className='title'>Random Quote App</h1>

                <div style={{ backgroundColor: this.props.quote.color }} id='quote-box'>
                    <div id='text'><p>{this.props.quote.quote}</p></div>
                    <div id='author'><h5>_ {this.props.quote.author} _</h5></div>
                    <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${this.props.quote.quote} ${this.props.quote.author}`} target='_blank' title="Post this quote on twitter!">
                        <button className="tweet-qoute" > Twitter</button>
                    </a>
                    <button id='new-quote' className="next-quote" onClick={this.nextQuote}>Next Quote</button>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        quote: state.NewQuoteReducer
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        nextQuote:(getQuote)=>{dispatch(newQuote(getQuote))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RandomQuote)
