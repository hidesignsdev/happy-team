import { NEW_QUOTE } from '../actions'

const initState = {
    author: '',
    quote: '',
    color: ''
}

const newQuoteReducer = (state = initState, action) => {
    switch (action.type) {
        case NEW_QUOTE: {
            let color = ['red', 'brown', 'Azure', 'orange', 'green', 'Aquamarine', 'pink']
            let colorNum = Math.floor(Math.random() * 7) // get random color    
            return {
                author: action.quote.author,
                quote: action.quote.quote,
                color: color[colorNum]
            }
        }
        default: return state
    }
}
export default newQuoteReducer