"use strict";

function calculateArea(length, width) {
  return length * width;
}

alert("you get " + calculateArea(54, 25));

function createCounter() {
  var counter = 0;
  return {
    increment: function increment() {
      counter += 1;
    },
    getValue: function getValue() {
      return counter;
    }
  };
}

var counter1 = createCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getValue());
var counter2 = createCounter();
counter2.increment();
console.log(counter2.getValue());
var counter = createCounter();
console.log(counter.getValue());

function cartTotal(cartItems) {
  var total = 0;
  cartItems.forEach(function (item) {
    total += item.price * item.quantity;
  });
  return total;
}

var cArt = [{
  name: "orng",
  price: 5,
  quantity: 5
}, {
  name: "apl",
  price: 100,
  quantity: 1
}, {
  name: "milk",
  price: 7.5,
  quantity: 30
}];
var totalPrice = cartTotal(cArt);
console.log("Total cost: $".concat(totalPrice.toFixed(2)));