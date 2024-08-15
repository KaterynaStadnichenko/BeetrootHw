"use strict";

var num1 = prompt("pls enter first number");
var operator = prompt('enter operator');
var num2 = prompt("pls enter second number");
var result;
num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (isNaN(num1) || isNaN(num2)) {
  alert("give correct num");
} else {
  switch (operator) {
    case '+':
      result = num1 + num2;
      alert("result is " + result);
      break;

    case '-':
      result = num1 - num2;
      alert("result is " + result);
      break;

    case '*':
      result = num1 * num2;
      alert("result is " + result);
      break;

    case '/':
      if (num2 === 0.0) {
        alert("cannot div by 0");
      } else {
        result = num1 / num2;
        alert("result is " + result);
      }

      break;

    default:
      alert("please add a proper operator");
      console.log('please add a proper operator');
      break;
  }
}