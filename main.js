let user = 0;
let comp = 0;
let draw = 0;
const msg = document.getElementById("message"); // Corrected the ID

const gencomp = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const Drawgame = () => {
  console.log("draw game");
  msg.innerText = "Game Draw!";
};

const showwinner = (userwin) => {
  if (userwin) {
    msg.innerText = "You Won!";
    user++;
  } else {
    msg.innerText = "You Lose!";
    comp++;
  }
  updateScore(); // Fix: Call updateScore function here
};

const updateScore = () => {
  document.getElementById("user-score").innerText = user;
  document.getElementById("comp-score").innerText = comp;
  document.getElementById("draw-score").innerText = draw;
};

const playgame = (userChoice) => {
  console.log("user choice =", userChoice);
  let compChoice = gencomp();
  console.log("computer choice =", compChoice);

  // Add your game logic here based on userChoice and compChoice
  let userwin = false;

  if (compChoice === userChoice) {
    Drawgame();
    draw++;
  } else {
    if (compChoice === "rock") {
      userwin = userChoice === "paper" ? true : false;
    } else if (compChoice === "paper") {
      userwin = userChoice === "scissors" ? true : false;
    } else if (compChoice === "scissors") {
      userwin = userChoice === "rock" ? true : false;
    }
    showwinner(userwin); // Call showwinner function here
  }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playgame(userChoice);
  });
});