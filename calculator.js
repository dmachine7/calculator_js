console.log("working");

var num1 = 0;
var num2 = 0;
var operator;
var answer;
var field=document.getElementById("input");

//clear input screen
const clrscr =()=>{
  location.reload();
}

//get numbers
const inputdata =(digit)=>{
  num1=num1*10+digit;
  field.value=num1;
  console.log(num1);
}

//set operation
const operation=(op)=>{
  operator=op;
  field.value=operator;
  console.log(operator);
  num2=num1;
  num1=0;
}

//calculate and display answer
const displayans=()=>{
  switch (operator) {
    case '+': answer=num1+num2;
              break;
    case '-': answer=num2-num1;
              break;
    case '*': answer=num1*num2;
              break;
    case '/': answer=num2/num1;
              break;
    default: field.value = 'not valid';
  }
  num1=answer;
  field.value=answer;
  console.log(answer);
}
