console.log("Hello World!")

let playerScore = 0;

let computerScore = 0;

let rockChoice = document.querySelector(".rock")
let paperChoice = document.querySelector(".paper")
let scissorsChoice = document.querySelector(".scissors")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}


rockChoice.addEventListener("click", (e) => {
    
    console.log(playRound("rock", computerChoice()))
})



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
    
}













