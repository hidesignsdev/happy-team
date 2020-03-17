import {ADD,SUBTRACT,DIVIDE,MULTIPLY,INPUT_NUMBER,INPUT_DECIMAL,CLEAR_ALL,EQUAL} from './constants'

export const add = () => {
    return {
        type: ADD
    }
}

export const subtract = () => {
    return {
        type: SUBTRACT
    }
}

export const divide = () => {
    return {
        type: DIVIDE
    }
}

export const multiply = () => {
    return {
        type: MULTIPLY
    }
}

export const input = () => {
    return {
        type: INPUT_NUMBER
    }
}

export const decimal = () => {
    return {
        type: INPUT_DECIMAL
    }
}

export const clear = () => {
    return {
        type: CLEAR_ALL
    }
}

export const equal = () => {
    return {
        type: EQUAL
    }
}
