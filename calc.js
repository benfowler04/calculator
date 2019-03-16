const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        let input = this.innerText

        if (/\d/.test(input)) {
            addToDisplay(input)
        }
        else if (input == 'C') {
            clear()
        }
    })
})

function addToDisplay(number) {
    let displayNum = display.innerText
    if (displayNum.includes('e')) {
        displayNum = Number(displayNum)
    }
    displayNum = displayNum + number
    setDisplay(displayNum)
}

function setDisplay(displayNum) {
    displayNum = displayNum.toString()
    if (displayNum.length > 9) {
        displayNum = parseInt(displayNum, 10)
        displayNum = displayNum.toExponential(9)
    }
    display.innerText = displayNum
}

function clear() {
    display.innerText = ''
}

function add (firstNum, secondNum) {
	return firstNum + secondNum
}

function subtract (firstNum, secondNum) {
	return firstNum - secondNum
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum
}

function divide (firstNum, secondNum) {
    if (secondNum == 0) {
        alert("Scotty can't change the laws of physics, and I can't change the laws of math!")
        clearDisplay()
    }
    else {
        return firstNum / secondNum
    }
}

function operate(firstNum, operator, secondNum) {
    if (operator == '+') {
        return add(firstNum, secondNum)
    }
    else if (operator == '-') {
        return subtract(firstNum, secondNum)
    }
    else if (operator == '*') {
        return multiply(firstNum, secondNum)
    }
    else if (operator == '/') {
        return divide(firstNum, secondNum)
    }
}