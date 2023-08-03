let firstNum = 0;
let secondNum = 0;
let operator = null;
let result = 0;
let calculated = false;
let operatorSelected = false;
let decimalPointAdded = false;
let resultDisplay = 0;

function plus (){
    result = parseFloat(firstNum)+parseFloat(secondNum);
}

function minus (){
    result = parseFloat(firstNum)-parseFloat(secondNum);
}

function multiply (){
    result = parseFloat(firstNum)*parseFloat(secondNum);
}

function divide (){
    result = parseFloat(firstNum)/parseFloat(secondNum);
}

function operate(){
    switch (operator) {
        case "+":
            plus()
            break;
        case "-":
            minus()
            break;    
        case "x":
            multiply()
            break;
        case "÷":
            divide()
            break;  
    }
    operatorSelected = false;
    calculated = true;
    resultDisplay = roundResult();
}

function roundResult(){
    return Math.floor(result * 100) / 100
}


//function to use past result in calculation

function useResult(){
    if(calculated){
        firstNum = result;
    }
    calculated = false;
}

//function to reset all variable 
function reset(){
    firstNum = 0;
    secondNum = 0;
    operator = null;
    result = 0;
    calculated = false;
    operatorSelected = false;
    decimalPointAdded = false;
}

//change firstNum or secondNum based on button pressed and if operator is selected or not

function changeNum(numElement){
    if(calculated){
        reset();
    }
    if(!operator){
        firstNum === 0 && !decimalPointAdded ? firstNum = numElement.value : firstNum += numElement.value;
    }
    if(operator){
        secondNum === 0 && !decimalPointAdded ? secondNum = numElement.value : secondNum += numElement.value;
    } 
}

//add decimal if has not already been added

function addDecimal(decimalElement){
    if(calculated){
        reset();
    }
    if(decimalPointAdded){
        return
    }
    if(!operator){
        firstNum += decimalElement.value;
    }
    if(operator){
        secondNum += decimalElement.value;
    }
    decimalPointAdded = true; 
}

//change operator based on button pressed

function changeOp(opElement){
    if(operatorSelected){
        runEqual();
    }
    if(calculated){
        secondNum = 0;
    }
    useResult();
    operator = opElement.value;
    operatorSelected = true;
    decimalPointAdded = false;
}

//run operate when equal is pressed
//if pressed without changing any variable calculate again using reult as first number

function runEqual(){
    useResult();
    operate();
    console.log(`${firstNum} ${operator} ${secondNum} = ${resultDisplay}`)
}

let mathButtons = document.querySelectorAll('.number,.decimal-point,.operator,.equal')

function checkType(){
    switch (true) {
        case this.classList.contains('number'):
            changeNum(this);
            break;
        case this.classList.contains('decimal-point'):
            addDecimal(this);
            break;
        case this.classList.contains('operator'):
            changeOp(this);
            break;
        case this.classList.contains('equal'):
            runEqual(this);
            break;
    }
}

mathButtons.forEach(mathButton => {
    mathButton.addEventListener("click",checkType);
});
