const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
let firstNumber = '';
let secondNumber = '';
let operator = '';



numbers.forEach((number) => {
    number.addEventListener('click', () => updateDisplay(number.textContent));
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => setOperator(operator.textContent));
});

equal.addEventListener('click', operateFunction);


function updateDisplay(content){
    display.textContent += content;
}

function setOperator(newOp){
    operator = newOp;
    firstNumber = display.textContent;
    console.log(operator);
    resetDisplay();
}
function operateFunction(){
    secondNumber = display.textContent;
    display.textContent = operate(operator, firstNumber, secondNumber);
    firstNumber = '';
    secondNumber = '';
}
function resetDisplay(){
    display.textContent = '';
}
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x , y){
    return x * y;
}
function divide(x , y){
    return x / y;
}

function round(num){
    return Math.round(num*1000)/1000;
}

function operate(operator, a, b){
    a=Number(a);
    b=Number(b);
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            if(b === 0) return null;
            return divide(a, b);
        default:
            return null;
    }
}