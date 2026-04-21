console.log("Hello World!")

let playerScore = 0;

let computerScore = 0;





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













