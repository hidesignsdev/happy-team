import React, { Component } from 'react'
import axios from 'axios';
class RandomQuote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            authur: '',
            color: ''
        }
    }
    componentDidMount() {
        this.getQuote()
    }
   
    // getQuote() {
    //      //get data with axios
    //     let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    //     axios.get(url)
    //         .then(res => {
    //             let data = res.data.quotes
    //             console.log(res.data.quotes)
    //             let quoteNum = Math.floor(Math.random() * data.length) //get random quote number in data
    //             let randomQuote = data[quoteNum] //actual quote
    //             let color = ['red', 'brown', 'Azure', 'orange', 'green', 'Aquamarine', 'pink'] 
    //             let colorNum = Math.floor(Math.random() * 7) // get random color    
    //             // console.log(color[colorNum])

    //             this.setState({
    //                 quote: randomQuote['quote'],
    //                 author: randomQuote['author'],
    //                 color: color[colorNum]
    //             })

    //         })
    // }
    // fake data
    getQuote(){
        let quotes = [
            {
            "quote" : "Life isn’t about getting and having, it’s about giving and being.",
            "author": "Kevin Kruse"
            },
            {
            "quote" : "Whatever the mind of man can conceive and believe, it can achieve.",
            "author" : "Napoleon Hill"
            },
            {
            "quote" : "Strive not to be a success, but rather to be of value.",
            "author" : "Albert Einstein"
            },
            {
            "quote" : "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
            "author" : "Robert Frost"
            },
            {
            "quote" : "I attribute my success to this: I never gave or took any excuse.",
            "author" : "Florence Nightingale"
            },
            {
            "quote" : "You miss 100% of the shots you don’t take.",
            "author" : "Wayne Gretzky"
            },
            {
            "quote" : "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
            "author" : "Michael Jordan"
            },
            {
            "quote" : "The most difficult thing is the decision to act, the rest is merely tenacity.",
            "author" : "Amelia Earhart"
            },
            {
            "quote" : "Every strike brings me closer to the next home run.",
            "author" : "Babe Ruth"
            },
            {
            "quote" : "Definiteness of purpose is the starting point of all achievement.",
            "author" : "W. Clement Stone"
            }]
                let quoteNum = Math.floor(Math.random() * quotes.length) //get random quote number in data
                let randomQuote = quotes[quoteNum] //actual quote
                let color = ['red', 'brown', 'Azure', 'orange', 'green', 'Aquamarine', 'pink'] 
                let colorNum = Math.floor(Math.random() * 7) // get random color    
                // console.log(color[colorNum])
                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author'],
                    color: color[colorNum]
                })
        
        
    }
    nextQuote = () => {
        this.getQuote();
    }

    render() {
        // const { quote, author, color } = this.state 
        return (
            <div id='wrapper'>
                <h1 className='title'>Random Quote App</h1>

                <div style={{ backgroundColor: this.state.color } }  id='quote-box'>
                    <div  id='text'><p>{this.state.quote}</p></div>
                    <div  id='author'><h5>_ {this.state.author} _</h5></div>
                    <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${this.state.quote} ${this.state.author}`} target='_blank' title="Post this quote on twitter!">
               <button className="tweet-qoute" > Twitter</button>
                    </a>
                    <button id='new-quote' className="next-quote"  onClick={this.nextQuote}>Next Quote</button>
                   
                </div>
            </div>
        )
    }
}
export default RandomQuote
