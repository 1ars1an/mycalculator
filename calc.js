var displayValue;
var currentNumber;
var operatorFlag;
var currentOperator;

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
    return a/b;
}

function clear() {
    displayValue = '';
    currentNumber = 0;
    operatorFlag = 0;
    currentOperator = '';
}

function displayContent() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            add(a, b);
            break; 
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
            
    }
}

function setNumbers() {
}

function selectButton() {
    const numbers = Array.from(document.querySelectorAll('.numbers'));
    numbers.forEach(item => item.addEventListener('click', setNumbers));
}
