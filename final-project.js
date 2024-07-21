const readline = require("readline-sync");

let wins = 0;
let losses = 0;
let ties = 0;

// This starts an infinite loop that will keep running until the player chooses to quit.
while (true) {
  const playerchoice = readline.question(
    "Enter rock, paper, or scissors (or q to quit): "
  ); //prompt displays the message and waits for the player to type their choice.
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
