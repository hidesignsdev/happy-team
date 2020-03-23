import { NUMBER_INPUT, DECIMAL, OPERATOR, CALCULATE, CLEAR } from '../actions'

const initState = {
    equation: '',
    result: '0'
}

const InputReducer = (state = initState, action) => {
    let { equation, result } = state
    switch (action.type) {
        case CLEAR: {
            return {
                equation: '',
                result: '0'
            }
        }
        case NUMBER_INPUT: {
            if (state.equation.match(/[0-9.]$/) && !state.equation.includes("=")) {
                if (state.equation.match(/[+\-*/]/) == null) {
                    let val = state.equation + action.payload
                    equation = val
                    result = val
                } else {
                    equation = state.equation + action.payload
                    result = state.result + action.payload
                }

            } else if (state.equation.match(/[+\- */]$/)) {
                let val = state.equation + action.payload;
                equation = val
                result = action.payload
                // eslint-disable-next-line
            } else if (state.result === "0" && action.payload !== "0" || state.equation.includes("=")) {
                equation = action.payload
                result = action.payload
            }
            return {
                ...state,
                equation,
                result
            }
        }
        case OPERATOR: {
            if (state.equation.includes("=")) {
                let val = state.result;
                val += action.payload;
                equation = val

            } else if (state.equation !== "" && state.equation.match(/[ *\- +/]$/) === null) {
                let val = state.equation;
                val += action.payload;
                equation = val

            } else if (state.equation.match(/[+\- */]$/) !== null) {
                if (state.equation.includes("+-") === true && action.payload !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 2)
                    val += action.payload;
                    equation = val

                } else if (state.equation.includes("/-") === true && action.payload !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 2)
                    val += action.payload
                    equation = val

                } else if (state.equation.includes("*-") === true && action.payload !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 2)
                    val += action.payload
                    equation = val

                } else if (state.equation.match(/[+/ *]$/) !== null && action.payload === "-") {
                    let val = state.equation + action.payload
                    equation = val

                } else if (state.equation.match(/[+]/) !== null && action.payload !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 1)
                    val += action.payload
                    equation = val

                } else if (state.equation.match(/-/) !== null && action.payload !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 1)
                    val += action.payload
                    equation = val
                }
            }
            return {
                ...state,
                equation
            }
        }
        case DECIMAL: {
            let val = "0."
            if (state.equation === "" || state.equation.includes("=")) {
                equation = val
                console.log(equation)
                result = val

            } else if (state.equation.match(/[+\- */]$/)) {
                result = val
                equation = state.equation + val

            } else if (!state.result.includes(".")) {
                equation = state.equation + action.payload
                result = state.result + action.payload
            }
            return {
                ...state,
                equation,
                result
            }
        }
        case CALCULATE:
            if (state.equation.includes("=")) {
                let val = `${state.result} = ${state.result}`
                equation = val

            } else if (state.equation !== "" && state.equation.match(/[+\-*/]/) !== null && state.equation.match(/[+\-*/]$/) == null) {
                // eslint-disable-next-line
                let result = Number.isInteger(eval(state.equation)) ? eval(state.equation) : parseFloat(eval(state.equation).toFixed(5));
                let val = state.equation
                val += `= ${result}`;
                equation = val
                return {
                    ...state,
                    equation,
                    result
                }
            }
            return state
        default:
            return state;
    }
}
export default InputReducer;