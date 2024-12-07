const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let firstOperand = null;
let secondOperand = null;
let operator = null;
let shouldResetDisplay = false;

// Functions for basic math operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? 'Error' : a / b; }

// Function to operate based on the operator
function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}

// Update the display
function updateDisplay(value) {
    if (shouldResetDisplay) {
        display.textContent = value;
        shouldResetDisplay = false;
    } else {
        display.textContent = display.textContent === '0' ? value : display.textContent + value;
    }
}

// Clear the calculator
function clearCalculator() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    display.textContent = '0';
}

// Delete last input
function backspace() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            updateDisplay(button.dataset.number);
        } else if (button.classList.contains('operator')) {
            if (operator !== null) {
                secondOperand = display.textContent;
                display.textContent = operate(operator, firstOperand, secondOperand);
                firstOperand = display.textContent;
            } else {
                firstOperand = display.textContent;
            }
            operator = button.dataset.operator;
            shouldResetDisplay = true;
        } else if (button.classList.contains('equals')) {
            if (operator === null || shouldResetDisplay) return;
            secondOperand = display.textContent;
            display.textContent = operate(operator, firstOperand, secondOperand);
            firstOperand = null;
            operator = null;
            shouldResetDisplay = true;
        } else if (button.classList.contains('clear')) {
            clearCalculator();
        } else if (button.classList.contains('backspace')) {
            backspace();
        } else if (button.classList.contains('decimal')) {
            if (!display.textContent.includes('.')) {
                updateDisplay('.');
            }
        }
    });
});

// Keyboard support
document.addEventListener('keydown', e => {
    const key = e.key;
    if (!isNaN(key)) {
        updateDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        if (operator !== null) {
            secondOperand = display.textContent;
            display.textContent = operate(operator, firstOperand, secondOperand);
            firstOperand = display.textContent;
        } else {
            firstOperand = display.textContent;
        }
        operator = key;
        shouldResetDisplay = true;
    } else if (key === 'Enter' || key === '=') {
        if (operator === null || shouldResetDisplay) return;
        secondOperand = display.textContent;
        display.textContent = operate(operator, firstOperand, secondOperand);
        firstOperand = null;
        operator = null;
        shouldResetDisplay = true;
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearCalculator();
    } else if (key === '.') {
        if (!display.textContent.includes('.')) {
            updateDisplay('.');
        }
    }
});
