import React, { Component } from 'react'
import './button.scss'
import Button from './Button'
import Display from './Display'
import Formula from './Formula'
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "0",
            equation: ""
        }

        this.numInput = this.numInput.bind(this);
        this.operatorInput = this.operatorInput.bind(this);
        this.decimalInput = this.decimalInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    numInput(e) {
        if (this.state.equation.match(/[0-9\.]$/) && !this.state.equation.includes("=")) {
            if (this.state.equation.match(/[+\- *\/]/) == null) {
                let val = this.state.equation
                val += e.currentTarget.value
                this.setState({
                    equation: val,
                    result: val
                });
            }
            else {
                this.setState({
                    equation: this.state.equation + e.currentTarget.value,
                    result: this.state.result + e.currentTarget.value
                })
            }
        } else if (this.state.equation.match(/[+\- *\/]$/)) {
            let val = this.state.equation + e.currentTarget.value
            this.setState({
                equation: val,
                result: e.currentTarget.value
            })
        } else if (this.state.result === "0" && e.currentTarget.value !== "0" || this.state.equation.includes("=")) {
            this.setState({
                equation: e.currentTarget.value,
                result: e.currentTarget.value
            })
        }
    }
    operatorInput(e) {
        if (this.state.equation.includes("=")) {
            let val = this.state.result;
            val += e.currentTarget.value;
            this.setState({
                equation: val
            })
        } else if (this.state.equation !== "" && this.state.equation.match(/[ *\- +\/]$/) === null) {
            let val = this.state.equation;
            val += e.currentTarget.value;
            this.setState({
                equation: val
            })
        } else if (this.state.equation.match(/[-/\*\+]$/) !== null) {
            if (this.state.equation.includes("+-") === true && e.currentTarget.value !== "-") {
                let val = this.state.equation;
                val = val.substring(0, val.length - 2)
                val += e.currentTarget.value
                this.setState({
                    equation: val
                })
            }
            else if (this.state.equation.includes("/-") === true && e.currentTarget.value !== "-") {
                let val = this.state.equation;
                val = val.substring(0, val.length - 2)
                val += e.currentTarget.value
                this.setState({
                    equation: val
                })
            } else if (this.state.equation.includes("*-") === true && e.currentTarget.value !== "-") {
                let val = this.state.equation;
                val = val.substring(0, val.length - 2)
                val += e.currentTarget.value
                this.setState({
                    equation: val
                })
            }
            else if (this.state.equation.match(/[+\*\/]$/) !== null && e.currentTarget.value === "-") {
                let val = this.state.equation + e.currentTarget.value
                this.setState({
                    equation: val
                })
            } else if (this.state.equation.match(/[+\*\/]/) !== null && e.currentTarget.value !== "-") {
                let val = this.state.equation;
                val = val.substring(0, val.length - 1)
                val += e.currentTarget.value
                this.setState({
                    equation: val
                })
            } else if (this.state.equation.match(/-/) !== null && e.currentTarget.value !== "-") {
                let val = this.state.equation;
                val = val.substring(0, val.length - 1)
                val += e.currentTarget.value
                this.setState({
                    equation: val
                })

            }

        }

    }
    decimalInput(e) {
        if (this.state.equation == "" || this.state.equation.includes("=")) {
            let val = "0."
            this.setState({
                equation: val,
                result: val,
            })
        } else if (this.state.equation.match(/[+\- *\/]$/)) {
            let val = "0."
            this.setState({
                result: val,
                equation: this.state.equation + val
            })
        } else if (!this.state.result.includes(".")) {
            this.setState({
                equation: this.state.equation + e.currentTarget.value,
                result: this.state.result + e.currentTarget.value
            })
        }
    }
    calculate() {
        if (this.state.equation.includes("=")) {
            let val = `${this.state.result} = ${this.state.result}`
            this.setState({
                equation: val
            });
        } else if (this.state.equation != "" && this.state.equation.match(/[+\-*\/]/) != null && this.state.equation.match(/[+\-*\/]$/) == null) {
            let result = Number.isInteger(eval(this.state.equation)) ? eval(this.state.equation) : parseFloat(eval(this.state.equation).toFixed(5));
            let val = this.state.equation
            val += `= ${result}`;
            this.setState({
                equation: val,
                result: result
            })
        }
    }
    clearInput() {
        this.setState({
            result: "0",
            equation: ''
        })
    }
    render() {
        return (
            <div >
                <h3 className="title">Calculator</h3>
                <div id="calculator" className="calculator" >
                    <div className="display" >
                        <div className="equation" >
                            <Formula id="formula" equation={this.state.equation} />
                        </div>
                        <div className="result">
                            <Display id="display" result={this.state.result} equation={this.state.equation} />
                        </div>
                    </div>
                    <Button display="AC" id="clear" value="clear" className="jumbo" click={this.clearInput} />
                    <Button display="⌫" id="delete" value="delete" />
                    <Button display="/" id="divide" value="/" click={this.operatorInput} />
                    <Button display="X" id="multiply" value="*" click={this.operatorInput} />
                    <Button display="7" id="seven" value="7" click={this.numInput} />
                    <Button display="8" id="eight" value="8" click={this.numInput} />
                    <Button display="9" id="nine" value="9" click={this.numInput} />
                    <Button display="-" id="subtract" value="-" click={this.operatorInput} />
                    <Button display="4" id="four" value="4" click={this.numInput} />
                    <Button display="5" id="five" value="5" click={this.numInput} />
                    <Button display="6" id="six" value="6" click={this.numInput} />
                    <Button display="+" id="add" value="+" click={this.operatorInput} />
                    <Button display="1" id="one" value="1" click={this.numInput} />
                    <Button display="2" id="two" value="2" click={this.numInput} />
                    <Button display="3" id="three" value="3" click={this.numInput} />
                    <Button display="0" id="zero" value="0" className="jumbo" click={this.numInput} />
                    <Button display="." id="decimal" value="." click={this.decimalInput} />
                    <Button display="=" id="equals" value="=" className="equalStyle" click={this.calculate} />
                </div>

            </div>

        )
    }
}
export default Calculator
