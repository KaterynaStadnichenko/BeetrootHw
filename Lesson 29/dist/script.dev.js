"use strict";

var cars = [{
  manufacturer: "opel",
  year: 2005,
  averageSpeed: 60
}, {
  manufacturer: "toyota",
  year: 2010,
  averageSpeed: 80
}, {
  manufacturer: "mercedes",
  year: 2022,
  averageSpeed: 100
}, {
  manufacturer: "nissan",
  year: 1987,
  averageSpeed: 140
}];
showCars(cars);

function showCars(cars) {
  for (var i = 0; i < cars.length; i++) {
    console.log("manufacturer ".concat(cars[i].manufacturer, ", year: ").concat(cars[i].year, ", averageSpeed: ").concat(cars[i].averageSpeed));
  }
}

var distance = prompt("put distance ");
calculateTime(cars, distance);

function calculateTime(cars, distance) {
  for (var i = 0; i < cars.length; i++) {
    var drivingTime = distance / cars[i].averageSpeed;
    var breakTime = Math.floor(drivingTime / 4);
    console.log(drivingTime + breakTime);
  }
}