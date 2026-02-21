userScore = 0;
compScore=0;
balls=30;

let btn = document.querySelector("button");
const winnerShow=document.querySelector(".winner");
let winnerMsg=document.querySelector("#winner-msg");
let userEnterScore=document.querySelector("#user-enter-score");
let userTotalScore=document.querySelector("#user-total-score");
let compEnterScore=document.querySelector("#comp-enter-score");
let compTotalScore=document.querySelector("#comp-total-score");
let ballsRemaining=document.querySelector(".balls");
const choices = document.querySelectorAll(".choice");

compScore=Math.floor(Math.random()* 100);
compTotalScore.innerText=compScore;

const compMove=() => {
  options=[0,1,2,3,4,6];
  let val=Math.floor(Math.random()* 6);
  return options[val];
}

const resetGame = () => {
  winnerShow.classList.add("hide");
}

const showWinner = (userScore,compScore,balls,userEnterScore,compEnterScore) => {
  
  if (userScore > compScore ) {
    winnerShow.classList.remove("hide");
    winnerMsg.innerText="Congratulatiions! You Won :)";
  } else if (userScore < compScore && balls===0) {
    winnerShow.classList.remove("hide");
    winnerMsg.innerText="You Lost Better Luck Next Time (";
  } else if (userEnterScore == compEnterScore) {
    winnerShow.classList.remove("hide");
    winnerMsg.innerText="Wicket!! You Lost Better Luck Next Time (";
  } else {
    winnerShow.classList.remove("hide");
    winnerMsg.innerText="Its a Draw Match ";
  }
}

const btnClick = () => {
  btn.addEventListener("click",resetGame());
}

let playGame=(choice) => {
  let idx=choice.getAttribute("id");
  userEnterScore.innerText=idx;
  compEnterScore.innerText=compMove();
  userScore+=Number(idx);
  userTotalScore.innerText=userScore;
  balls--;
  ballsRemaining.innerText=balls;
  if(userScore > compScore || balls===0) {
    showWinner(userScore,compScore,balls,userEnterScore,compEnterScore);
  }
  winnerShow.classList.add("hide");
}

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    playGame(choice);
  });
});