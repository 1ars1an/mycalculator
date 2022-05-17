var displayValue;
var operandOne;
var operandTwo;
var operandFlag;
var currentOperator;

const operators = Array.from(document.querySelectorAll('.operator')); //selects operator buttons

//Functions
function add(a, b) { 
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    console.log(operandTwo);
    if (operandTwo === 0) {
        return "Error, Can't divide by 0"
    }
    return a/b;
}

function clear() {
    displayValue = '';
    operandOne = null;
    operandTwo = null;
    operandFlag = 0;
    currentOperator = '';
    operators.forEach(item => item.classList.remove('active'));
    displayContent();
}

function displayContent() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            operandOne = add(a, b);
            operandTwo = null;
            break; 
        case '-':
            operandOne = subtract(a, b);
            operandTwo = null;
            break;
        case '*':
            operandOne = multiply(a, b);
            operandTwo = null;
            break;
        case '/':
            operandOne = divide(a, b);
            operandTwo = null;
            break;
        case '=':
            displayValue = operandOne;
            break;
    }
}

function checkString() {
    if (displayValue === '+' || displayValue === '-' || displayValue === '*' || displayValue === '/') {
        return true;
    } else return false;
}

function setValues() {
    if (checkString() || operandFlag === 1) {
        dot.addEventListener('click', setFloat, { once: true });
        displayValue = '';
        operandFlag = 0;
    }
    displayValue += this.textContent;
    displayContent();
}

function setOperation() {
    if (currentOperator !== '') {
        if (checkString()) { //if user inputs operator twice in a row, does operation with first number itself [can change this to an error message]
            displayValue = operandOne;
        }
        operandTwo = Number(displayValue);
        operandFlag = 1;
        operate(currentOperator, operandOne, operandTwo);
        currentOperator = this.textContent;
        displayValue = operandOne; //can put this in switch
        displayContent();
    } else {
    if (this.textContent === '=') {
        displayValue = 'Error, Equation Not Complete.'
        displayContent();
        return;
    }
    operandOne = Number(displayValue);
    currentOperator = this.textContent;
    displayValue = this.textContent;
    displayContent();
    }
}

function setFloat() {
    displayValue += this.textContent;
    displayContent();
    dot.removeEventListener('click', setFloat);
}

function selectButton() {
    const numbers = Array.from(document.querySelectorAll('.numbers'));
    numbers.forEach(item => item.addEventListener('click', setValues));
    operators.forEach(item => item.addEventListener('click', setOperation)); //for operator buttons
    const clearButton = document.querySelector('.buttons.function');
    clearButton.addEventListener('click', clear);
    const dot = document.getElementById('dot');//selects the dot button
    dot.addEventListener('click', setFloat, { once: true });
}

function setColor() {
    operators.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

function colorOperator() {
    operators.forEach(item => item.addEventListener('click', setColor));
}

clear();
displayContent();
colorOperator();
selectButton();
