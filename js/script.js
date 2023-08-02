let firstNum = 0
let secondNum = 0
let operator = null
let result = 0

function plus (){
    return parseFloat(firstNum)+parseFloat(secondNum);
}

function minus (){
    return parseFloat(firstNum)-parseFloat(secondNum);
}

function multiply (){
    return parseFloat(firstNum)*parseFloat(secondNum);
}

function divide (){
    return parseFloat(firstNum)/parseFloat(secondNum);
}

function operate(){
    switch (operator) {
        case "+":
            return result = plus()
            break;
        case "-":
            return result = minus()
            break;    
        case "x":
            return result = multiply()
            break;
        case "÷":
            return result = divide()
            break;  
    }
}

let mathButtons = document.querySelectorAll('.number,.operator,.equal')

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

function changeOp(opElement){
    return operator = opElement.textContent 
}

function checkType(){
    switch (true) {
        case this.classList.contains('number'):
            changeNum(this);
            break;
        case this.classList.contains('operator'):
            changeOp(this);
            break;
    }
}

mathButtons.forEach(mathButton => {
    mathButton.addEventListener("click",checkType)
});
