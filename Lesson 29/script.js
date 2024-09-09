let cars = [
    {manufacturer: "opel", year: 2005, averageSpeed: 60,},
    {manufacturer: "toyota", year: 2010, averageSpeed: 80,},
    {manufacturer: "mercedes", year: 2022, averageSpeed: 100,},
    {manufacturer: "nissan", year: 1987, averageSpeed: 140,}
];

showCars(cars)

function showCars(cars) {
    for (let i = 0; i < cars.length; i++) {
        console.log(`manufacturer ${cars[i].manufacturer}, year: ${cars[i].year}, averageSpeed: ${cars[i].averageSpeed}`);
    }   
}
let distance = prompt("put distance ")
calculateTime(cars, distance) 

function calculateTime(cars, distance) {
    for (let i = 0; i < cars.length; i++) {

        const drivingTime = distance / cars[i].averageSpeed
        const breakTime = Math.floor(drivingTime / 4)
        console.log(drivingTime + breakTime)
    }   
}

const start = Date.now();

const myTime = new Date();
// console.log(myTime)

const time = {
    hour: myTime.getHours(), 
    minute: myTime.getMinutes(), 
    second: myTime.getSeconds()
};
showTime(time)

function showTime(time) {
        for (let theTime in time) {
            console.log(`${theTime}: ${time[theTime]}`);
    }
 }  
 
 let newSecond = prompt("put second")
 newSecond = Number(newSecond)

 showSeconds(newSecond, time);

 function showSeconds(newSecond, time) {
    let totalSeconds = time.second + newSecond;
    let additionalMinutes = Math.floor(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;
    let totalMinutes = time.minute + additionalMinutes;
    let additionalHours = Math.floor(totalMinutes / 60); 
    totalMinutes = totalMinutes % 60; 
    let totalHours = (time.hour + additionalHours) % 24;
    console.log(`Updated Time: ${totalHours}h:${totalMinutes}m:${totalSeconds}s`);
 }

 let newMinutes = prompt("put minute")
 newMinutes = Number(newMinutes)

 showMinutes (newMinutes, time)

 function showMinutes(newMinutes, time) {
    let totalMinutes = time.minute + newMinutes; 
    let additionalHours = Math.floor(totalMinutes / 60); 
    totalMinutes = totalMinutes % 60; 
    let totalHours = (time.hour + additionalHours) % 24;
    console.log(`Updated Time: ${totalHours}h:${totalMinutes}m: ${time.second}s:`);
 }

let newHours = prompt("put hours")
newHours = Number(newHours)

showHours(newHours, time)

function showHours(newHours, time) {
    let totalHours = (newHours + time.hour) % 24;
    console.log(`Updated Time: ${totalHours}h:${time.minute}m: ${time.second}s:`);
}