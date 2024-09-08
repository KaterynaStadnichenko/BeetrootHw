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