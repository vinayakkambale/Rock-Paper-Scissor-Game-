let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () => {
    
    msg.innerText = "game was draw. play again.";
    msg.style.backgroundColor = "#081b31";
    

};

const showWinner = (userWin , userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorepara.innerText = computerScore;

        msg.innerText = `you lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};
const playGame = (userChoice) => {
    console.log("userChoice=", userChoice);
    //generate computer choice
    const computerChoice = genComputerChoice();
    console.log("computerChoice=", computerChoice);

    if(userChoice === computerChoice) {
        //draw game
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;

        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
        
    

};

choices.forEach((choice)=> {
    
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);

    })
})