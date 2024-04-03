const input = document.getElementById('input');
const calculatorBody = document.querySelector('.calculator-body')
input.toggleAttribute('disabled',);
const operators = {
    'sum':'+',
    'divide':'/',
    'subtract':'-',
    'multiply':'*',
    'module':'%'
}
let firstNumber = '';
let secondNumber = '';
let operator = '';
calculatorBody.addEventListener('click',function(event){
    let id = event.target.id;
    if(!isNaN(id) && id!=='') updateNumber(id)
    else if(id in operators && id!=='' && firstNumber != '') operator?getResult(operators[id]): updateOperator(id);
    else if(id =='equal') getResult();
    else if(id==='clear') clearInput();
    else if(id == 'delete') popNumber();
    else if(id=='sign') changeSign();
    setState()
});

function changeSign(){
    if(secondNumber != ''){
        secondNumber *=-1;
    } else if(firstNumber != '' && secondNumber ==''){
        firstNumber *=-1;
    }
}
function popNumber(){
    if(secondNumber!='' & firstNumber !='' && operator != ''){
        secondNumber = secondNumber.slice(0, -1);
    } else if (secondNumber == '' && operator != '' && firstNumber != ''){
        operator = '';
    } else if(secondNumber == '' && operator =='' && firstNumber != ''){
        firstNumber = firstNumber.slice(0, -1);
    }

}
function clearInput(){
    firstNumber = '';
    secondNumber = '';
    operator = '';
}
function updateOperator(key){
    operator = operators[key];
}
function getResult(op = ''){
    if (firstNumber != '' && secondNumber != '' && operator != ''){
        result = operationEvaluator(firstNumber,secondNumber,operator);
        firstNumber = (Math.floor(result * 100) /100).toString();
        operator = op;
        secondNumber = '';
    }
}
function updateNumber(number){
    operator? secondNumber+=number:firstNumber+=number;
}
function setState(){
    input.setAttribute('value',firstNumber+operator+secondNumber);
}
function operationEvaluator(a,b,op){
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+':
            return a + b;
        case '*':
            return a * b;
        case '/':
            if(b===0){
                alert("Can' divide by zero");
                return 0;
            }
            return a / b;
        case '-':
            return a - b;
        case '%':
            return a % b;
    }
}
