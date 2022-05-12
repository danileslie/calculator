let allButtons = document.querySelectorAll('div.buttons button');
let arr = [];

allButtons.forEach(button => {
    button.addEventListener('click', buttonValue);

});

function add(x,y){
return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function operate(x, y, operator){
if (operator === "+"){
    return add(x,y);
} else if (operator === "-"){
    return subtract(x,y);
} else if (operator === "*"){
    return multiply(x,y);
} else {
    return divide(x,y);
}
}
 
function buttonValue(x){
    let value = Number(x.target.textContent);    
    arr.push(value);
    let number = arr.join('');
    console.log(typeof arr[value]);
    console.log(arr);
    console.log(number);
}

