const prompt = require("prompt-sync")();
//

// data type
// prompt is variable name

// the part that is in right site is stored of prompt varable
// reuire () => to import the library

//  In Node.js, require is a function used to import modules (libraries) into your script.
// 'prompt-sync' is the name of the module (library) that we want to import.
// When you call require('prompt-sync'), Node.js looks for a module named prompt-sync in its module system.

// You can use prompt (the function returned by prompt-sync) to prompt the user for input from the command line. It reads user input and returns it as a string.

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
  const playerchoice = prompt("Enter rock,paper of scissors (or q to quit):");
  if (playerchoice.toLowerCase() === "q") {
    break;
  }
  if (
    playerchoice !== "rock" &&
    playerchoice !== "paper" &&
    playerchoice !== "scissors"
  ) {
    console.log("please enter a valid choise.");
    continue;
  }
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * 2);
  const compChoice = choices[randomIndex];
  // console.log(compChoice)
  console.log("The computer chose", compChoice);

  if (compChoice === playerchoice) {
    console.log("Draw!");
    ties++;
  } else if (
    (playerchoice === "paper" && compChoice === "rock") ||
    (playerchoice === "rock" && compChoice === "scissors") ||
    (playerchoice === "scissors" && compChoice === "paper")
  ) {
    console.log("WON!");
    wins++;
  } else {
    console.log("LOS!");
    losses++;
  }
}
console.log("Wins:", wins, "Losses:", losses, "Ties:", ties);
