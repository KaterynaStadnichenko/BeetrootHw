let userName = prompt("please enter username")
alert("Hello " + userName + '!')

const currentYear = 2024;
let userBirthYear = prompt("pls enter your birth year")
let userAge = currentYear - userBirthYear
alert("you are " + userAge)

let distance = prompt("pls enter distance")
let time = prompt("pls enter time")
let speed = distance / time ;
alert(speed + "km/h")

let flashDriveSizeGB = prompt("Please enter the flash drive memory size in GB:");
let flashDriveSizeMB = flashDriveSizeGB * 1024;
const fileSizeMB = 820;
let fileCount = Math.floor(flashDriveSizeMB / fileSizeMB);
alert("You can store " + fileCount + " files of 820MB on this flash drive.");

let walletAmount = prompt("Please enter the amount of money in your wallet:");
let chocolatePrice = prompt("Please enter the price of one chocolate bar:");
let chocolateCount = Math.floor(walletAmount / chocolatePrice);
let change = walletAmount % chocolatePrice;
alert("You can buy " + chocolateCount + " chocolate bars and you will have " + change + " left as change.");