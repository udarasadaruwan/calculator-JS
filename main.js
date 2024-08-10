let inputElimentObject = document.getElementById('inputEl');
let numberOne;
let numberTwo;

inputElimentObject.addEventListener("keyup", (event)=>{
    if(event.key==='Enter'||event.keyCode===13){
        let tempValue = inputElimentObject.value;
        if (!isNaN(tempValue)){ // (!-not is Not a number)
            if (numberOne===undefined){
                numberOne = parseInt(tempValue);
                document.getElementById('num1').textContent=numberOne;
                inputElimentObject.value='';
            }else if (numberTwo===undefined){
                numberTwo = parseInt(tempValue);
                document.getElementById('num2').textContent=numberTwo;
                inputElimentObject.value='';
            }else {
                clearAll();
            }
        }
    }
});

const execute = (op)=>{
    if (!numberOne && !numberTwo){
        alert('Numers are empty pleare enter two numbers 😊');
        return
    }
    switch (op){
        case '+': operate((numberOne+numberTwo),op);break;
        case '-': operate((numberOne-numberTwo),op);break;
        case '*': operate((numberOne*numberTwo),op);break;
        case '/': operate((numberOne/numberTwo),op);break;
        case '%': operate((numberOne%numberTwo),op);break;
        case 'c': clearAll();
    }
}

const operate = (answer,op)=>{
    document.getElementById('ans').textContent = answer;
    document.getElementById('op').textContent = op;
}

const clearAll = ()=>{
    numberOne = undefined;
    numberTwo = undefined;
    alert('incert again !!! 🤭🤭');
    document.getElementById('num1').textContent='?';
    document.getElementById('num2').textContent='?';
    document.getElementById('ans').textContent='?';
    document.getElementById('op').textContent ='..';
}