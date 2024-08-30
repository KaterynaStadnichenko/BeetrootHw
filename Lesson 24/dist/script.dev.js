"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// function formatName (firstName, lastName) {
//     firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
//     lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
//     return lastName + ", " + firstName
// }
// let firstName = prompt("pls enter first name")
// let lastName = prompt("pls enter last name")
// alert("blabla " + formatName(firstName, lastName))
var duplicateArr = [1, 2, 3, 4, 5, 1, 5, 5, 8, 9];
console.log(removeDuplicetes(duplicateArr));

function removeDuplicetes(dupArr) {
  return _toConsumableArray(new Set(dupArr));
} // const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
// const testNumbers = [
//   "888-888-8888",    // Valid
//   "888-88-8888",    // Invalid
//   "8888888888",      // Invalid
//   "888-8888-888",    // Invalid
//   "888-888-888O",    // Invalid (contains letter 'O')
//   "88-888-8888"     // Invalid
// ];
// testNumbers.forEach(number => {
//   console.log(`${number}: ${phoneRegex.test(number)}`);
// });
// const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
// const testNumbers = [
//   "(888) 888-8888",    // Valid
//   "(888)888-8888",     // Invalid (missing space)
//   "888-888-8888",      // Invalid (wrong format)
//   "(888) 888-888",    // Invalid (incorrect digit grouping)
//   "(888) 888-888O",    // Invalid (contains letter 'O')
//   "(88) 888-8888",    // Invalid (incorrect area code)
//   "(888) 888-88888"    // Invalid (too many digits at the end)
// ];
// testNumbers.forEach(number => {
//   console.log(`${number}: ${phoneRegex.test(number)}`);
// });
// const phoneRegex = /^\d{3} \d{3} \d{4}$/;
// const testNumbers = [
//   "888 888 8888",    // Valid
//   "8888888888",      // Invalid (no spaces)
//   "888-888-8888",    // Invalid (hyphens instead of spaces)
//   "888  888  8888",  // Invalid (extra spaces)
//   "88 8888 8888",    // Invalid (incorrect digit grouping)
//   "888 888 8888",    // Invalid (contains letter 'O')
//   "888 888 888",    // Invalid (incorrect digit grouping)
//   " 888 888 8888 "   // Invalid (leading/trailing spaces)
// ];
// testNumbers.forEach(number => {
//   console.log(`${number}: ${phoneRegex.test(number)}`);
// });