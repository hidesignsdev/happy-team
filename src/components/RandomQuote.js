import React, { Component } from 'react'
// import axios from 'axios';
import quotes from '../quotes.json'
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
        let data = quotes
                let quoteNum = Math.floor(Math.random() * data.length) //get random quote number in data
                let randomQuote = data[quoteNum] //actual quote
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
