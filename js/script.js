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

let numButtons = document.querySelectorAll('.number')

function changeNum(){
    if(parseFloat(firstNum) == 0){
        return firstNum = this.textContent 
    }
    return firstNum += this.textContent    
}

numButtons.forEach(numButton => {
    numButton.addEventListener("click",changeNum)
});

