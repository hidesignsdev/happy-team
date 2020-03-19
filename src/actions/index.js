export const CLEAR = 'CLEAR'
export const NUMBER_INPUT = 'NUMBER_INPUT'
export const OPERATOR = 'OPERATOR'
export const DECIMAL = 'DECIMAL'
export const CALCULATE = 'CALCULATE'

export const clearAction = () => {
    return {
        type: CLEAR
    }
}

export const numberAction = (number) => {
    return {
        type: NUMBER_INPUT,
        number
    }
}

export const operatorAction = (operator) => {
    return {
        type: OPERATOR,
        operator
    }
}
export const decimalAction = (decimal) => {
    return {
        type: DECIMAL,
        decimal
    }
}
export const calculateAction = () => {
    return {
        type: CALCULATE
    }
}