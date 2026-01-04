console.log("Hello World!")

let playerScore = 0;

let computerScore = 0;


function getComputerChoice() {

    let num = Math.random();

    if (num < 1 / 3) return "rock"

    else if (num < 2 / 3) return "scissors"

    else return "paper"
}

function getHumanChoice() {
   let a = prompt("Please enter rock, paper or scissors:")
   return a.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    console.log(`Me: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)

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
    console.log(`Me: ${playerScore} Computer: ${computerScore}`)
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        if (playerScore === 5 && playerScore > computerScore) {
            console.log("Congratulations! You Win!")
        }
        else if (playerScore === computerScore) {
            console.log("It's a Tie!")
        }

        else {
            console.log("Sorry! You Lose!") 
        }
    }
}

playGame();









