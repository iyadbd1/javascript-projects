// get HTML elements

// buttons
const buttons = document.querySelectorAll(".option");

// choices
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");

const playerChoiceText = document.getElementById("playerChoiceText");
const computerChoiceText = document.getElementById("computerChoiceText");
// result
const result = document.getElementById("result");

// scores
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const playerScoreText = document.getElementById("playerScoreText");
const computerScoreText = document.getElementById("computerScoreText");

function randomIn(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let playerChoice = "",
  computerChoice = "";
let playerScore = 0,
  computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function tie() {
  result.textContent = "It's a Tie";
  result.classList.remove("win");
  result.classList.remove("lose");
  result.classList.add("tie");
}

function win() {
  result.textContent = "YOU WIN!";
  result.classList.remove("lose");
  result.classList.remove("tie");
  result.classList.add("win");
  playerScore++;
}

function lose() {
  result.textContent = "YOU LOSE!";
  result.classList.remove("win");
  result.classList.remove("tie");
  result.classList.add("lose");
  computerScore++;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // save player choice (chosen option)
    playerChoice = button.id;

    // computer chooses randomly
    computerChoice = choices[randomIn(0, choices.length - 1)];

    // display choices
    playerChoiceText.textContent = `${playerChoice}`;
    computerChoiceText.textContent = `${computerChoice}`;

    switch (playerChoice) {
      case computerChoice:
        tie();
        break;
      case "rock":
        computerChoice == "scissors" ? win() : lose();
        break;
      case "scissors":
        computerChoice == "paper" ? win() : lose();
        break;
      case "paper":
        computerChoice == "rock" ? win() : lose();
        break;
    }

    // display new scores
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
  });
});
