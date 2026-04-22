
let playerScore = 0;

let computerScore = 0;


let playerChoiceButton = document.querySelector(".buttons")
let parahraphText = document.querySelector("#outputText")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}


playerChoiceButton.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let humanChoice = e.target.id;
        
        playRound(humanChoice, getComputerChoice())
    }
    
})



function playRound(humanChoice, computerChoice) {
    console.log(`Me: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)

    if (humanChoice === computerChoice) console.log(`It's a Tie! Both chose ${humanChoice}`)

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













