import React, { Component } from 'react'
import './button.scss'
import Button from './Button'
import Display from './Display'
import Formula from './Formula'
import { connect } from 'react-redux'
import { clearAction, numberAction, operatorAction, decimalAction, calculateAction } from '../actions'


class Calculator extends Component {
    handleNumberInput = (e) => {
        this.props.dispatch(numberAction(e.currentTarget.value));
    };
    handleOperatorInput = (e) => {
        this.props.dispatch(operatorAction(e.currentTarget.value));
    };
    handleDecimalInput = (e) => {
        this.props.dispatch(decimalAction(e.currentTarget.value));
    };
    handleCalculate = (e) => {
        this.props.dispatch(calculateAction(e.currentTarget.value));
    };
    handleClear = (e) => {
        this.props.dispatch(clearAction(e.currentTarget.value));
    };
    render() {
        return (
            <div >
                <h3 className="title">Calculator</h3>
                <div id="calculator" className="calculator" >
                    <div className="display" >
                        <div className="equation" >
                            <Formula id="formula" equation={this.props.calculator.equation} />
                        </div>
                        <div className="result">
                            <Display id="display" result={this.props.calculator.result} equation={this.props.calculator.equation} />
                        </div>
                    </div>
                    <Button display="AC" id="clear" value="clear" className="jumbo" click={this.handleClear} />
                    <Button display="⌫" id="delete" value="delete" />
                    <Button display="/" id="divide" value="/" click={this.handleOperatorInput} />
                    <Button display="X" id="multiply" value="*" click={this.handleOperatorInput} />
                    <Button display="7" id="seven" value="7" click={this.handleNumberInput} />
                    <Button display="8" id="eight" value="8" click={this.handleNumberInput} />
                    <Button display="9" id="nine" value="9" click={this.handleNumberInput} />
                    <Button display="-" id="subtract" value="-" click={this.handleOperatorInput} />
                    <Button display="4" id="four" value="4" click={this.handleNumberInput} />
                    <Button display="5" id="five" value="5" click={this.handleNumberInput} />
                    <Button display="6" id="six" value="6" click={this.handleNumberInput} />
                    <Button display="+" id="add" value="+" click={this.handleOperatorInput} />
                    <Button display="1" id="one" value="1" click={this.handleNumberInput} />
                    <Button display="2" id="two" value="2" click={this.handleNumberInput} />
                    <Button display="3" id="three" value="3" click={this.handleNumberInput} />
                    <Button display="0" id="zero" value="0" className="jumbo" click={this.handleNumberInput} />
                    <Button display="." id="decimal" value="." click={this.handleDecimalInput} />
                    <Button display="=" id="equals" value="=" className="equalStyle" click={this.handleCalculate} />
                </div>

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        calculator: state.calculator
    }
}
export default connect(mapStateToProps)(Calculator)
