"use strict";

var shoppingReceipt = [{
  name: "Orange",
  amount: 5,
  pricePerItem: 6
}, {
  name: "Milk",
  amount: 1,
  pricePerItem: 20
}, {
  name: "Bread",
  amount: 2,
  pricePerItem: 5
}, {
  name: "Potatoes",
  amount: 10,
  pricePerItem: 7
}];
var printReciept = Object.values(shoppingReceipt);
console.log(printReciept);

function calculateTotal() {
  return shoppingReceipt.reduce(function (total, item) {
    return total + item.amount * item.pricePerItem;
  }, 0);
}

console.log(calculateTotal(shoppingReceipt));
console.log([].concat(shoppingReceipt).sort(function (a, b) {
  return a.pricePerItem - b.pricePerItem;
}).pop().name);

function calculateAveragePrice() {
  var totalItems = shoppingReceipt.reduce(function (total, item) {
    return total + item.amount;
  }, 0);
  var totalCost = calculateTotal();
  return totalCost / totalItems;
}

console.log("average price is ", calculateAveragePrice().toFixed(2));