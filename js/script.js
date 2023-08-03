let firstNum = 0
let secondNum = 0
let operator = null
let result = 0

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
    calculated = true
}

//change firstNum or secondNum based on button pressed and if operator is selected or not

function changeNum(numElement){
    if(!operator){
        parseFloat(firstNum) == 0 ? firstNum = numElement.textContent : firstNum += numElement.textContent
        return
    }
    if(operator){
        parseFloat(secondNum) == 0 ? secondNum = numElement.textContent : secondNum += numElement.textContent
        return
    } 
}

//change operator based on button pressed

function changeOp(opElement){
    return operator = opElement.textContent 
}

//run operate when equal is pressed
//if pressed without changing any variable calculate again using reult as first number

let calculated = false

function runEqual(){
    if(calculated){
        firstNum = result
    }
    operate()
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`)
}

let mathButtons = document.querySelectorAll('.number,.operator,.equal')

function checkType(){
    switch (true) {
        case this.classList.contains('number'):
            changeNum(this);
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
    mathButton.addEventListener("click",checkType)
});
