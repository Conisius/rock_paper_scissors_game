console.log("Hello World!")

let computerChoice = getComputerChoice();

let humanChoice;

let playerScore = 0;

let computerScore = 0;


function getComputerChoice() {

    let num = Math.random();

    if (num < 1 / 3) return "rock"

    else if (num < 2 / 3) return "scissors"

    else return "paper"
}

function getHumanChoice() {

    humanChoice = prompt("Please enter rock, paper or scissors:")

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) console.log("It's a Tie!")
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
        )
     {
        playerScore++
        console.log("You Win!"); 
    }

    else {
        computerScore++
        console.log("You Lose!")
    }
}









