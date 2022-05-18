let numberButtons = document.querySelectorAll('div.buttons .number');
let operatorButtons = document.querySelectorAll('div.buttons .operator');
let equalButton = document.querySelector('.equal');
let clearButton = document.querySelector('.clear');
let display = document.querySelector('.display');

let arr = [];
let arr2 = [];
let number = 0;
let number2 = undefined;
let xValueSet = false;
let equalPressed = false;
let solution = undefined;


function getXValue() {
        numberButtons.forEach(button => {
        button.addEventListener('click', xValue);    
        });      
}
getXValue();


function getYValue() {
    numberButtons.forEach(button => {
    button.addEventListener('click', yValue);
});
}

operatorButtons.forEach(button => {
    button.addEventListener('click', operator);
});

// equalButton.addEventListener('click', equal);

clearButton.addEventListener('click', clearDisplay);

function add(x,y){
    let solution = x + y;
return solution;
}

// function subtract(x,y){
//     return x-y;
// }

// function multiply(x,y){
//     return x*y;
// }

// function divide(x,y){
//     return x/y;
// }

// function operate(x, y, operator){
// if (operator === "+"){
//     return add(x,y);
// } else if (operator === "-"){
//     return subtract(x,y);
// } else if (operator === "*"){
//     return multiply(x,y);
// } else {
//     return divide(x,y);
// }
// }
 
function xValue(x){
    if (!xValueSet){
        let value = (x.target.textContent);    
        arr.push(value);
        number = Number(arr.join(''));
        display.textContent = number;  
    }        
}

function yValue(y){ 
    let value = Number(y.target.textContent); 
    arr2.push(value);
    number2 = Number(arr2.join(''));
    display.textContent = number2; 
}

function operator(){
    solution = add(number, number2)
    xValueSet = true;
    getYValue();
    if (number2 != undefined){
        add(number, number2)
        console.log(number);
        console.log(number2);
        if(solution != undefined){
            number = solution;
        }
        display.textContent = solution;
    }
    arr2 = [];
}

function clearDisplay(){
    arr = [];
    arr2 = [];
    number = 0;
    number2 = undefined;     
}


// hitting operator button first makes it impossible to assign a starting x value

// write if statement that either throws an error when operator button is clicked, or assigns the 
// next input to the x value





