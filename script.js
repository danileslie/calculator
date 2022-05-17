let numberButtons = document.querySelectorAll('div.buttons .number');
let operatorButtons = document.querySelectorAll('div.buttons .operator');
let display = document.querySelector('.display');

let arr = [];
let arr2 = [];
let number;
let number2;
let xValueSet = false;


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

function add(x,y){
return x+y;
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
    operate();
    getYValue();
    xValueSet = true;
    if (number2 != undefined){
        number = number2;
    console.log(number);
    }
}

function operate(){
    console.log(`Operate in progress. Current X value is ${number}`);
    console.log(`Second operate in progress. Current Y value is ${number2}`);
    console.log(`Solution is ${add(number, number2)}`)
    arr2 = [];  
}

function clearDisplay(){
    display.value = '';
    arr = [];
    arr2 = [];
    xValueSet = false;
}


