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
    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        axios.get(url)
            .then(res => {
                let data = res.data.quotes
                let quoteNum = Math.floor(Math.random() * data.length) //quote number
                let randomQuote = data[quoteNum] //actual quote
                let color = ['red', 'brown', 'blue', 'orange', 'green', 'black', 'pink']
                let colorNum = Math.floor(Math.random() * 7)
                console.log(color[colorNum])
                // console.log(data)
                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author'],
                    color: color[colorNum]
                })

            })
    }
    nextQuote = () => {
        this.getQuote();
    }

    render() {
        const { quote, author, color } = this.state
        return (
            <div id='wrapper'>
                <h1 className='title'>Random Quote App</h1>

                <div style={{ backgroundColor: color } } className="background" id='quote-box'>
                    <div style={{color:'white'}} id='text'><p>{quote}</p></div>
                    <div id='author'><h5>{author}</h5></div>
                    <button onClick={this.nextQuote}>Next Quote</button>
                   
                </div>
            </div>
        )
    }
}
export default RandomQuote
