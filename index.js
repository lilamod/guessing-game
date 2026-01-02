
const ps = require("prompt-sync");
const prompt = ps();

let secret = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Guess a number between 1 and 10.");
    if (guess == secret) {
        console.log("Correct! You win 🎉");
        break;
    } else if (guess > secret) {
        console.log("Too high! Try again");
    } else {
        console.log("Too low! Try again")
    }
} while(guess !== secret);


const secretNumber = Math.floor(Math.random() * 10) + 1;

let guessNumber;
let attempt = 1;
let maxAttempts = 5;

do {
    guessNumber = Number(prompt(`Guess a number between 1 and 10 (Attempt ${attempt}/${maxAttempts}):`));

    if (guessNumber === secretNumber) {
        console.log("Correct! You win 🎉");
        break;
    } else if (guessNumber > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
    }

    attempt++;

    if (attempt > maxAttempts) {
        console.log(`Sorry, you failed 😢 The correct number was ${secretNumber}.`);
        break;
    }

} while (guessNumber !== secretNumber);
