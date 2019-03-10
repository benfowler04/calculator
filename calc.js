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
    return firstNum / secondNum
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