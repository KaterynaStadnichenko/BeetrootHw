"use strict";

var numberInput = prompt("enter number");
var number = parseInt(numberInput);
console.log(checkOddOrEven(number));
alert(checkOddOrEven(number));

function checkOddOrEven(number) {
  if (number % 2 === 0) {
    return "It is Even Number";
  } else {
    return "It is Odd Number";
  }
}

var gradeInput = prompt("enter number");
var grade = parseInt(gradeInput);

function calculateGrade(grade) {
  if (grade >= 100) {
    return "this grade doesnt exist";
  }

  if (grade <= 100 && grade >= 90) {
    return "A";
  }

  if (grade <= 89 && grade >= 80) {
    return "B";
  }

  if (grade <= 79 && grade >= 70) {
    return "C";
  }

  if (grade <= 69 && grade >= 60) {
    return "D";
  }

  if (grade <= 59 && grade >= 0) {
    return "F";
  }
}

console.log(calculateGrade(grade));
alert(calculateGrade(grade));
var findDayOfWeek = prompt('enter number from 0 to 6');
var num = parseInt(findDayOfWeek);
console.log(getDay(num));
alert(getDay(num));

function getDay(num) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[num];
}