
let playerScore = 0;

let computerScore = 0;

let rockChoice = document.querySelector(".rock")
let paperChoice = document.querySelector(".paper")
let scissorsChoice = document.querySelector(".scissors")
let parahraphText = document.querySelector("#outputText")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}


rockChoice.addEventListener("click", (e) => {
    
    playRound("rock", getComputerChoice())
})



function playRound(humanChoice, computerChoice) {
    console.log(`Me: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)

    if (humanChoice === computerChoice) console.log("It's a Tie!")

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
        )
     {
        playerScore++
        parahraphText.textContent = "You win"
        console.log(`You Win! 
Your Score is: ${playerScore}
Computer Score is: ${computerScore}`); 
    }

    else {
        computerScore++
        parahraphText.textContent = "You lose"
        console.log(`You Lose!
Your Score is: ${playerScore}
Computer Score is: ${computerScore}`)
    }
    
}













