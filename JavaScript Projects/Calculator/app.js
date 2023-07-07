let display = '0';

const operation = '+-*/';
const number = '0123456789.'
const equal = '=';
const clear = 'clear';

function inputDigit(digit){
    display = (display === '0' ? digit : display + digit);
}

function inputOperator(operator){
    if(display.charAt(display.length - 1) === ' '){
        display = display.slice(0, -3);
    }
    display += ' ' + operator + ' ';
}

function compute(value1, value2, op){
    if(op === '+'){
        return value1 + value2;
    }
    else if(op === '-'){
        return value1 - value2;
    }
    else if(op === '*'){
        return value1 * value2;
    }
    else{
        return value1 / value2;
    }
}

function calculate(){
    if(display.charAt(display.length - 1) !== ' '){
        let value = display;
        value.replace(' ','');
        let result = '';
        let pos = 0;
        while(pos < value.length && !operation.includes(value.charAt(pos))){
            result += value.charAt(pos);
            pos++;
        }
        result = parseFloat(result);
        while(pos < value.length){
            let op = value.charAt(pos);
            pos++;
            let temp = '';
            while(pos < value.length && !operation.includes(value.charAt(pos))){
                temp += value.charAt(pos);
                pos++;
            }
            temp = parseFloat(temp);
            result = compute(result, temp, op);
        }
        display = result.toString();
    }
}

function remove(){
    if(display.charAt(display.length - 1) === ' '){
        display = display.slice(0, -3);
    }
    else{
        display = display.slice(0, -1);
    }
}

function solve(event){
    let value = event.target.value;
    if(number.includes(value)){
        inputDigit(value);
    }
    if(operation.includes(value)){
        inputOperator(value);
    }
    if(equal.includes(value)){
        calculate();
    }
    if(clear.includes(value)){
        remove();
    }
    if(display.length === 0){
        display = '0';
    }
    document.querySelector('.calculator-screen').value = display;
}

document.querySelector('.calculator-keys').addEventListener('click', solve);
document.querySelector('.calculator-screen').value = display;