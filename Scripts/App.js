let computerResult = document.getElementById("computer-choice");
let userResult = document.getElementById("player-choice");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let message = document.getElementById("message");

function computerChoice() {
  const randomPick = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return randomPick[randomNumber];
}

function userChoice() {
  rock.addEventListener("click", () => {
    userResult.textContent = "✊";
    MainProgramLogic("rock");
  });
  paper.addEventListener("click", () => {
    userResult.textContent = "✋";
    MainProgramLogic("paper");
  });
  scissors.addEventListener("click", () => {
    userResult.textContent = "✌️";
    MainProgramLogic("scissors");
  });
}

function MainProgramLogic(playerChoice) {
  let Result = computerChoice();

  if (Result == "rock") {
    computerResult.textContent = "✊";
  } else if (Result == "paper") {
    computerResult.textContent = "✋";
  } else if (Result == "scissors") {
    computerResult.textContent = "✌️";
  } else {
    console.error("no choice");
  }

  determineWinner(playerChoice, Result);

  setTimeout(resetChoices, 2000);

  // You can add more game logic here to determine the winner
  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${Result}`);
}

function resetChoices() {
  userResult.textContent = "";
  computerResult.textContent = "";
  message.textContent = "Make your choice!";
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    message.textContent = "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message.textContent = "The player wins!";
  } else {
    message.textContent = "The computer wins!";
  }
}

userChoice();
