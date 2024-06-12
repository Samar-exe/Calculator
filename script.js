let prevValue = '';
let currValue = '';
let operator = '';

let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let prevScreen = document.querySelector(".previous");
let currScreen = document.querySelector(".current");

numbers.forEach((number)=>number.addEventListener("click",()=>{
    doNumber(number.textContent);
    currScreen.textContent = currValue;
}))
operators.forEach((op)=> op.addEventListener("click",()=>{
    doOperator(op.textContent);
    prevScreen.textContent = prevValue +' '+operator;
    
   
}))

clear.addEventListener("click",()=>{
    prevValue = '';
    currValue = '';
    operator = '';
    prevScreen.textContent = currValue;
    currScreen.textContent = currValue;
})
equal.addEventListener("click",()=>{
    operate();
    prevScreen.textContent = '';
    if(prevValue.length<=5){
        currScreen.textContent = prevValue;
    }
    else{
        currScreen.textContent = prevValue.slice(0,5)+"..."
    }
    console.log(prevValue)
})
decimal.addEventListener("click",()=>{
    addDecimal();
})
function doNumber(num){
    if(currValue.length <9){
    currValue += num;
    };
}
function doOperator(op){
    operator = op;
    prevValue = currValue;
    currValue = '';
}
function operate(){
prevValue = parseInt(prevValue);
currValue = parseInt(currValue);
if(operator === '+'){
    prevValue+=currValue;
}
else if(operator === '-'){
    prevValue-=currValue;
}
else if(operator === '*'){
    prevValue*=currValue;
}
else {
    prevValue/=currValue;
}
prevValue = round(prevValue);
prevValue = prevValue.toString();
currValue = prevValue.toString();

}
function round(num){
    return Math.round(num*1000)/1000;
}
function addDecimal(){
    if(!currValue.includes(".")){
        currValue+=".";
    }
}