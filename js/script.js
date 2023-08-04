let firstNum = 0;
let secondNum = 0;
let operator = null;
let result = 0;
let calculated = false;
let operatorSelected = false;
let decimalPointAdded = false;

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

function calculatePercentage(){
    result = (parseFloat(firstNum)/parseFloat(secondNum))*100;
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
        case "%":
            calculatePercentage()
            break;  
    }
    operatorSelected = false;
    calculated = true;
    //update display
    displayedInput.textContent = roundResult(result);
}

function roundResult(num){
    return Math.floor(num * 100) / 100
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
    //update display
    displayedInput.textContent = 0;
    displayedCalc.textContent = 0;
}

//change firstNum or secondNum based on button pressed and if operator is selected or not

function changeNum(numElement){
    if(calculated){
        reset();
    }
    if(!operator){
        firstNum === 0 && !decimalPointAdded ? firstNum = numElement.value : firstNum += numElement.value;
        //update display
        displayedInput.textContent = firstNum;

    }
    if(operator){
        secondNum === 0 && !decimalPointAdded ? secondNum = numElement.value : secondNum += numElement.value;
        //update display
        displayedInput.textContent = secondNum; 
    } 
    //update display
    displayedCalc.textContent == "0" ? displayedCalc.textContent = numElement.value : displayedCalc.textContent += numElement.value;
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
        //update display
        displayedInput.textContent = firstNum;
        displayedCalc.textContent += decimalElement.value;
    }
    if(operator){
        secondNum += decimalElement.value;
        //update display
        displayedInput.textContent = secondNum;
        displayedCalc.textContent += decimalElement.value;
    }
    decimalPointAdded = true; 
}

//change operator based on button pressed

function changeOp(opElement){
    if(operatorSelected){
        runEqual();
        //update display
        displayedCalc.textContent = roundResult(result);
    }
    if(calculated){
        secondNum = 0;
    }
    useResult();
    operator = opElement.value;
    operatorSelected = true;
    decimalPointAdded = false;
    //update display
    displayedCalc.textContent += ` ${operator} `;
}

//run operate when equal is pressed
//if pressed without changing any variable calculate again using reult as first number

function runEqual(){
    useResult();
    operate();
    displayedCalc.textContent = `${roundResult(firstNum)} ${operator} ${roundResult(secondNum)} = ${roundResult(result)}`
}

let mathButtons = document.querySelectorAll('button')

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
        case this.classList.contains('reset'):
            reset();
            break;
    }
}

mathButtons.forEach(mathButton => {
    mathButton.addEventListener("click",checkType);
});

//display the result and user input
const displayedInput = document.querySelector(".display-input");
const displayedCalc = document.querySelector(".display-calculation");
