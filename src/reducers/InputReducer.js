import { NUMBER_INPUT, DECIMAL, OPERATOR, CALCULATE, CLEAR } from '../actions'

const initState = {
    equation: '',
    result: '0'
}

const InputReducer = (state = initState, action) => {
    switch (action.type) {
        case CLEAR: {
            return {
                equation: '',
                result: '0'
            }
        }
        case NUMBER_INPUT:

            if (state.equation.match(/[0-9.]$/) && !state.equation.includes("=")) {

                if (state.equation.match(/[+\-*/]/) == null) {
                    let val = state.equation + action.number
                    return {
                        ...state,
                        equation: val,
                        result: val
                    }

                }
                else {
                    return {
                        ...state,
                        equation: state.equation + action.number,
                        result: state.result + action.number
                    }
                }

            } else if (state.equation.match(/[+\- */]$/)) {
                let val = state.equation + action.number;
                return {
                    ...state,
                    equation: val,
                    result: action.number
                }
            // eslint-disable-next-line
            } else if (state.result === "0" && action.number !== "0" || state.equation.includes("=")) {
                return {
                    ...state,
                    equation: action.number,
                    result: action.number
                }

            } else if (state.result === "0" && action.number === "0") {
                return {
                    ...state,

                }

            }
            return state
        case OPERATOR: {

            if (state.equation.includes("=")) {
                let val = state.result;
                val += action.operator;
                return {
                    ...state,
                    equation: val
                }

            } else if (state.equation !== "" && state.equation.match(/[ *\- +/]$/) === null) {
                let val = state.equation;
                val += action.operator;
                return {
                    ...state,
                    equation: val
                }

            } else if (state.equation.match(/[+\- */]$/) !== null) {

                if (state.equation.includes("+-") === true && action.operator !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 2)
                    val += action.number;
                    return {
                        ...state,
                        equation: val
                    }

                }

                else if (state.equation.includes("/-") === true && action.operator !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 2)
                    val += action.operator
                    return {
                        ...state,
                        equation: val
                    }

                } else if (state.equation.includes("*-") === true && action.operator !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 2)
                    val += action.operator
                    return {
                        ...state,
                        equation: val
                    }
                }

                else if (state.equation.match(/[+/ *]$/) !== null && action.operator === "-") {
                    let val = state.equation + action.operator
                    return {
                        ...state,
                        equation: val
                    }
                } else if (state.equation.match(/[+]/) !== null && action.operator !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 1)
                    val += action.operator
                    return {
                        ...state,
                        equation: val
                    }
                } else if (state.equation.match(/-/) !== null && action.operator !== "-") {
                    let val = state.equation;
                    val = val.substring(0, val.length - 1)
                    val += action.operator
                    return {
                        ...state,
                        equation: val
                    }
                }

            }

            return state;

        }
        case DECIMAL: {
            if (state.equation === "" || state.equation.includes("=")) {
                let val = "0."
                return {
                    ...state,
                    equation: val,
                    result: val
                }

            } else if (state.equation.match(/[+\- */]$/)) {
                let val = "0."
                return {
                    ...state,
                    result: val,
                    equation: state.equation + val
                }

            } else if (!state.result.includes(".")) {
                return {
                    ...state,
                    equation: state.equation + action.decimal,
                    result: state.result + action.decimal
                }
            }
            else {
                return state;
            }
        }
        case CALCULATE: {
            if (state.equation.includes("=")) {
                let val = `${state.result} = ${state.result}`
                return {
                    ...state,
                    equation: val
                }
            
            } else if (state.equation !== "" && state.equation.match(/[+\-*/]/) !== null && state.equation.match(/[+\-*/]$/) == null) {
                // eslint-disable-next-line
                let result = Number.isInteger(eval(state.equation)) ? eval(state.equation) : parseFloat(eval(state.equation).toFixed(5));
                let val = state.equation
                val += `= ${result}`;
                return {
                    ...state,
                    equation: val,
                    result: result
                }
            }
            return state
        }
        default:
            return state;
    }
}
export default InputReducer;