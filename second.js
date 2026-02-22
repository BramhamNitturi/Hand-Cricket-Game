let userScore = 0;
let compScore = Math.floor(Math.random() * 100);
let balls = 30;

const btn = document.querySelector("button");
const winnerShow = document.querySelector(".winner");
let winnerMsg = document.querySelector("#winner-msg");
let userEnterScore = document.querySelector("#user-enter-score");
let userTotalScore = document.querySelector("#user-total-score");
let compEnterScore = document.querySelector("#comp-enter-score");
let compTotalScore = document.querySelector("#comp-total-score");
let ballsRemaining = document.querySelector(".balls");
const choices = document.querySelectorAll(".choice");

compTotalScore.innerText = compScore;

const compMove = () => {
  const options = [0, 1, 2, 3, 4, 6];
  let val = Math.floor(Math.random() * 6);
  return options[val];
};


const resetGame = () => {
  // Reset scores
  userScore = 0;
  balls = 30;

  // Generate new computer target
  compScore = Math.floor(Math.random() * 100);

  // Reset UI
  userTotalScore.innerText = 0;
  compTotalScore.innerText = compScore;
  userEnterScore.innerText = 0;
  compEnterScore.innerText = 0;
  ballsRemaining.innerText = 30;

  // Hide winner section
  winnerShow.classList.add("hide");
};


btn.addEventListener("click", resetGame);   

const showWinner = () => {
  winnerShow.classList.remove("hide");

  if (userScore > compScore) {
    winnerMsg.innerText = "Congratulations! You Won :)";
  } else if (userScore < compScore) {
    winnerMsg.innerText = "You Lost! Better Luck Next Time :(";
  } else {
    winnerMsg.innerText = "It's a Draw Match!";
  }
};

let playGame = (choice) => {
  if (balls === 0) return;

  let userRun = Number(choice.getAttribute("id"));
  let computerRun = compMove();

  userEnterScore.innerText = userRun;
  compEnterScore.innerText = computerRun;

  if (userRun === computerRun) {
    balls = 0;
    showWinner();
    return;
  }

  userScore += userRun;
  userTotalScore.innerText = userScore;

  balls--;
  ballsRemaining.innerText = balls;

  if (userScore > compScore || balls === 0) {
    showWinner();
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    playGame(choice);
  });

});
