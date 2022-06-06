let firstNumber = undefined;
let secondNumber = undefined;
let firstOperator = undefined;
let secondOperator = undefined;
let decimalSet = false;
let solution = undefined;
let displayContent = 0;

let allButtons = document.querySelectorAll('button');

function buttonPress(){
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', function(){
            if (allButtons[i].classList.contains('number')){
                getValue(allButtons[i].value);
                updateDisplay();
            } else if (allButtons[i].classList.contains('decimal')){
                    getDecimal();
                    updateDisplay();
            } else if (allButtons[i].classList.contains('operator')){
                getOperator(allButtons[i].value); 
                updateDisplay();   
            } else if (allButtons[i].classList.contains('posNeg')){
                getPosNeg();
                updateDisplay();
            } else if (allButtons[i].classList.contains('backSpace')){
               getBackSpace();
               updateDisplay();
            } 
            else if (allButtons[i].classList.contains('equal')){
                getEqual();
                updateDisplay();
            } else if (allButtons[i].classList.contains('clear')){
                clearDisplay();
                updateDisplay();
            }
        });    
    }
}
buttonPress();

function operate(x, y, operator){
    if (operator === '+'){
        return x + y;   
    } else if (operator === '-'){
        return x - y;
    } else if (operator === '*'){ 
        return x * y;
    } else if (operator === '/'){
        if (y === 0){
            return 'Nice try :)';
        } else {
            return x / y;
        }          
    }   
}

function updateDisplay(){
    let display = document.querySelector('.display');
    display.innerText = displayContent;
    if (displayContent.length > 9){
        // setting display content directly causes last number to be constantly replaced
        display.innerText = displayContent.substring(0, 9);
    }
}
updateDisplay();

function clearDisplay(){
    firstNumber = undefined;
    secondNumber = undefined;
    firstOperator = undefined;
    secondOperator = undefined;
    displayContent = 0;   
}

function getValue(value){
    if (firstNumber === undefined){
        // assigning first value
        if (displayContent === 0 || displayContent === '0'){
            displayContent = value;       
        } else {
            displayContent += value;
        }    
    } else {
        // assigning every other value (to second number)
        decimalSet = false;
       if (displayContent === firstNumber){
           
            displayContent = value;
        } else {
            displayContent += value;
        }
    }
}

function getOperator(operator){
    // adding second operator
    if (firstOperator != undefined && secondOperator === undefined){
        secondOperator = operator;
        secondNumber = displayContent;
        solution = operate(Number(firstNumber), Number(secondNumber), firstOperator);
        displayContent = getRound(solution);
        firstNumber = displayContent;
    }
    else if (firstOperator != undefined && secondOperator != undefined){
        //after first operate
        secondNumber = displayContent;
        solution = operate(Number(firstNumber), Number(secondNumber), secondOperator);
        secondOperator = operator;
        displayContent = getRound(solution);
        firstNumber = displayContent;
    }
    else {
   firstOperator = operator;
   firstNumber = displayContent;
    }
}

function getEqual(){
    if (firstNumber === undefined){
        displayContent = displayContent;
    } else {
    // runs operate on equal press
    secondNumber = displayContent;
    solution = operate(Number(firstNumber), Number(secondNumber), firstOperator);
    displayContent = getRound(solution);
}
// resets after equal press
firstNumber = displayContent;
secondNumber = undefined;
firstOperator = undefined;
secondOperator = undefined;
solution = undefined;
}

function getDecimal(){
    if (!decimalSet){
        displayContent += '.';
        decimalSet = true; 
    }   
}

function getPosNeg(){
displayContent *= -1;
}

function getBackSpace(){
    // ensuring there will always be a number in the display
    if (displayContent.length <= 1){
    displayContent = 0;
    } else {
    displayContent = displayContent.slice(0, -1);
    }
}

function getRound(solution){
    let newSolution = solution.toString();
    if (newSolution.includes('.')) {
        newSolution = (Number(newSolution)).toFixed(3);
        return newSolution;   
    }
    else if (newSolution.length > 9){
        newSolution = solution.toPrecision(4);
        return newSolution;   
    } else {
        return solution;
    }
}

