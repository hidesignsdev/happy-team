
let currentValue = ''
let register = []
let result = []
let expression = ''


class CalculatorMethods {

    constructor() {
        currentValue = ''
        register = []
        result = []
    }

    add() {
        if (currentValue === '') {
            return
        }
        register.push(currentValue)
        register.push('+')

        currentValue = ''
    }

    subtract() {
        if (currentValue === '') {
            return
        }
        register.push(currentValue)
        register.push('-')

        currentValue = ''
    }

    multiply() {
        if (currentValue === '') {
            return
        }
        register.push(currentValue)
        register.push('*')

        currentValue = ''
    }

    divide() {
        if (currentValue === '') {
            return
        }
        register.push(currentValue)
        register.push('/')

        currentValue = ''
    }

    equals() {
        if (currentValue === '') {
            return
        }
        register.push(currentValue)

        expression = register.join(' ')

        result = eval(expression)
        currentValue = result.toString()
        register = []
    }

    inputDecimal() {
        if (currentValue.indexOf('.') >= 0) {
            return
        }

        if (currentValue === '') {
            currentValue += '0.'
        } else {
            currentValue += '.'
        }
    }

    inputNumber(number) {
        if (currentValue === '0') {
            currentValue = ''
            currentValue += number
        } else {
            currentValue += number
        }
    }

    clearAll() {
        currentValue = '0'
        register = []
        expression = ''
    }

    getValue() {
        return currentValue
    }

    getExpression() {
        return register.join(' ')
    }
}

export default CalculatorMethods