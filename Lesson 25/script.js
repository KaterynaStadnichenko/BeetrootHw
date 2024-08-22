for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}


let numbers = [153, 0, 9, 14, 86, 23, 8, 486, 45, 100];
let sum = 0;
let i = 0;
while (i < numbers.length) {
    sum += numbers[i];
    i++;
}
console.log("the sum is", sum);


const correctNumber = 21;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (guess < correctNumber) {
        console.log("too low");
    } else if (guess > correctNumber) {
        console.log("too high");
    } else if (guess === correctNumber) {
        console.log("correct");
    } else {
        console.log("pls enter again");
    }
} while (guess !== correctNumber);