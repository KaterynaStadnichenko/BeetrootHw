"use strict";

function min(a, b) {
  if (a === b) {
    return "put different numbers";
  }

  if (a < b) {
    return a;
  }

  return b;
}

;
console.log(min(10, 10));