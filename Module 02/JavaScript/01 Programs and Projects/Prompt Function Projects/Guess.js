const prompt = require("prompt-sync")(); // For command line input

let secret = Math.floor(Math.random() * 100) + 1; // number between 1-100
let guess;

while (guess !== secret) {
  guess = parseInt(prompt("Guess a number between 1 and 100: "), 10);

  if (isNaN(guess)) {
    console.log("Please enter a valid number.");
  } else if (guess < secret) {
    console.log("Too low! Try again.");
  } else if (guess > secret) {
    console.log("Too high! Try again.");
  } else {
    console.log("Correct! You guessed the number.");
  }
}
