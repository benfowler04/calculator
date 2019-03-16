const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')
let numberStored = ''
let operatorStored = ''
let newInput = false

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        let input = this.textContent

        if (/\d/.test(input)) {
            addToDisplay(input)
        }
        else if (input == 'C') {
            clear()
        }
        else if (input == '=') {
            if (!numberStored || !operatorStored) {
                alert('Error: no operation entered. Clearing data')
                clear()
            }
            else {
                numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
                operatorStored = ''
                setDisplay(numberStored)
            }
        }
        else {
            processOperator(input)
        }
    })
})

function addToDisplay(number) {
    let displayNum = display.textContent
    if (newInput) {
        displayNum = 0
        newInput = false
    }
    if (displayNum == 0) {
        setDisplay(number)
    }
    else {
        if (displayNum.includes('e')) {
            displayNum = Number(displayNum)
        }
        displayNum = displayNum + number
        setDisplay(displayNum)
    }
}

function setDisplay(displayNum) {
    displayNum = displayNum.toString()
    if (displayNum.length > 9) {
        displayNum = parseInt(displayNum, 10)
        displayNum = displayNum.toExponential(9)
    }
    display.textContent = displayNum
}

function clear() {
    display.textContent = 0
    numberStored = ''
    operatorStored = ''
}

function processOperator(operator) {
    if (!numberStored) {
        numberStored = display.textContent
    }
    else {
        numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
    }
    operatorStored = operator
    newInput = true
}

function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    if (b == 0) {
        alert("Scotty can't change the laws of physics, and I can't change the laws of math!")
        clear()
    }
    else {
        return a / b
    }
}

function operate(a, operator, b) {
    if (operator == '+') {
        return add(a, b)
    }
    else if (operator == '-') {
        return subtract(a, b)
    }
    else if (operator == '*') {
        return multiply(a, b)
    }
    else if (operator == '/') {
        return divide(a, b)
    }
}