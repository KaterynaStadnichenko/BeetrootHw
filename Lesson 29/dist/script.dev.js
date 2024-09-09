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

var start = Date.now();
var myTime = new Date(); // console.log(myTime)

var time = {
  hour: myTime.getHours(),
  minute: myTime.getMinutes(),
  second: myTime.getSeconds()
};
showTime(time);

function showTime(time) {
  for (var theTime in time) {
    console.log("".concat(theTime, ": ").concat(time[theTime]));
  }
}

var newSecond = prompt("put second");
newSecond = Number(newSecond);
showSeconds(newSecond, time);

function showSeconds(newSecond, time) {
  var totalSeconds = time.second + newSecond;
  var additionalMinutes = Math.floor(totalSeconds / 60);
  totalSeconds = totalSeconds % 60;
  var totalMinutes = time.minute + additionalMinutes;
  var additionalHours = Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;
  var totalHours = (time.hour + additionalHours) % 24;
  console.log("Updated Time: ".concat(totalHours, "h:").concat(totalMinutes, "m:").concat(totalSeconds, "s"));
}

var newMinutes = prompt("put minute");
newMinutes = Number(newMinutes);
showMinutes(newMinutes, time);

function showMinutes(newMinutes, time) {
  var totalMinutes = time.minute + newMinutes;
  var additionalHours = Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;
  var totalHours = (time.hour + additionalHours) % 24;
  console.log("Updated Time: ".concat(totalHours, "h:").concat(totalMinutes, "m: ").concat(time.second, "s:"));
}

var newHours = prompt("put hours");
newHours = Number(newHours);
showHours(newHours, time);

function showHours(newHours, time) {
  var totalHours = (newHours + time.hour) % 24;
  console.log("Updated Time: ".concat(totalHours, "h:").concat(time.minute, "m: ").concat(time.second, "s:"));
}