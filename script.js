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