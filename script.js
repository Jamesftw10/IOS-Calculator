let currentInput = '0';
let previousInput = '';
let operator = null;

const display = document.getElementById('result');

function updateDisplay() {
    display.innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        if (number === '.' && currentInput.includes('.')) return;
        currentInput += number;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) calculate();
    previousInput = currentInput;
    currentInput = '0';
    operator = op;
}

function calculate() {
    if (operator === null || previousInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}