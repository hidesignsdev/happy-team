import {ADD,SUBTRACT,MULTIPLY,DIVIDE,INPUT_NUMBER,INPUT_DECIMAL,EQUAL,CLEAR_ALL,CLEAR_ITEM} from '../actions/constants'
import CalculatorMethods from '../../calculator/CaculatorMethods'

const initialState = {
    value: '',
    expression: ''
}

const calculator = new CalculatorMethods()

const calculatorReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD:
            calculator.add()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case MULTIPLY:
            calculator.multiply()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case DIVIDE: 
            calculator.divide()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case SUBTRACT:
            calculator.subtract()
            return {
                    ...state,
                    value: calculator.getValue().toString(),
                    expression: calculator.getExpression()
                }

        case INPUT_NUMBER:
            return {
                    ...state,
                    value: calculator.getValue()
                }

        case INPUT_DECIMAL:
            calculator.inputDecimal()
            return {
                    ...state,
                    value: calculator.getValue().toString()
                }

        case CLEAR_ALL:
            calculator.clearAll()
            return {
                    ...state,
                    value: calculator.getValue(),
                    expression: calculator.getExpression().toString()
                }
        case CLEAR_ITEM:
            calculator.clearItem()
            return{
                ...state,
                value:calculator.getValue()
            }


        case EQUAL:
            calculator.equals()
            return {
                    ...state,
                    value: calculator.getValue(),
                    expression: calculator.getExpression().toString()
                }

        default:
            return state
    }
}

export default calculatorReducer