let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})

const drawGame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.background = "darkslategray";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.background = "darkgreen";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! Computer's ${compChoice} beats your ${userChoice}.`;
        msg.style.background = "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
