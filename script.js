// let numberButtons = document.querySelectorAll('div.buttons .number');
// let operatorButtons = document.querySelectorAll('div.buttons .operator');
// let equalButton = document.querySelector('.equal');
// let clearButton = document.querySelector('.clear');
// let display = document.querySelector('.display');

// let arr = [];
// let arr2 = [];
// let number = 0;
// let number2 = undefined;
// let xValueSet = false;
// let operator1 = null;
// let operator2 = null;
// let displayContent = 0;

// function getXValue() {
//         numberButtons.forEach(button => {
//         button.addEventListener('click', xValue);    
//         });      
// }
// getXValue();

// function getYValue() {
//     numberButtons.forEach(button => {
//     button.addEventListener('click', yValue);
// });
// }

// function operatorClicked(){
//     for (let i = 0; i < operatorButtons.length; i++){
//         operatorButtons[i].addEventListener('click', function(){
//             if (operatorButtons[i].classList.contains('operator')){
//                 let operator = operatorButtons[i].value;
//                 insertOperator(operator);    
//         }
//     })
// }
// }

// operatorClicked();

// function xValue(x){
//     if (!xValueSet){
//         let value = (x.target.textContent);    
//         arr.push(value);
//         number = Number(arr.join(''));
//         display.textContent = number;  
//     }        
// }

// function yValue(y){ 
//     let value = Number(y.target.textContent); 
//     arr2.push(value);
//     number2 = Number(arr2.join(''));
//     display.textContent = number2; 
// }

// function insertOperator(operator){
//     let solution = operate(number, number2, operator);  
//     let result;      
//     if (operator1 != null && operator2 === null){
//         operator2 = operator1;
//         result = operate(number, number2, operator2);
//         display.textContent = result;
//         number = result;  
//     } else if (operator1 != null && operator2 != null){
//     result = operate(number, number2, operator1);
//     operator1 = operator;
//     display.textContent = result;
//     number = result;

//     }
//     else{
//         operator1 = operator; 
//     }
//     arr2 = [];    
//     console.log(`Result: ${result}, Number one: ${number}, Number 2: ${number2}`);
// }

// function operate(x, y, operator){
//     xValueSet = true;
//     getYValue();
//     if (operator === '+'){
//         return x + y;   
//     } else if (operator === '-'){
//         return x - y;
//     } else if (operator === '*'){ 
//         return x * y;
//     } else {
//         return x / y;       
//     }   
// }

// // // equalButton.addEventListener('click', equal);

// // clearButton.addEventListener('click', clearDisplay);

// // // function updateDisplay(){
// // //     display.innerText = displayContent; 
// // // }
// // // updateDisplay();

// // function clearDisplay(){
// //     arr = [];
// //     arr2 = [];
// //     number = 0;
// //     number2 = undefined; 
// //     updateDisplay();    
// // }

// // // equal button needs to run operate and then do nothing else until another operator + value is inputted
// // // hitting operator button first makes it impossible to assign a starting x value

// // // write if statement that either throws an error when operator button is clicked, or assigns the 
// // // next input to the x value


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
            } else if (allButtons[i].classList.contains('equal')){
                getEqual();
                updateDisplay();
            }else if (allButtons[i].classList.contains('clear')){
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
        displayContent = solution;
        firstNumber = displayContent;
    }
    else if (firstOperator != undefined && secondOperator != undefined){
        //after first operate
        secondNumber = displayContent;
        solution = operate(Number(firstNumber), Number(secondNumber), secondOperator);
        secondOperator = operator;
        displayContent = solution;
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
    displayContent = solution;
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

// clear info after hitting equal or it adds to last number
// equal function throws undefined if clicked before value is inputted
//function throws NaN after 'nice try'