
let playerScore = 0;

let computerScore = 0;


let playerChoiceButton = document.querySelector(".buttons")
let parahraphText = document.querySelector("#outputText")
let playerNum = document.querySelector("#playerScore")
let computerNum = document.querySelector("#computerScore")
let winText = document.querySelector(".winText")
let resetButton = document.querySelector(".reset")
let buttons =  document.querySelectorAll(".btn")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function winMessages() {
    const winningMessages = ["Nice one, you won!", "Bravo, you are superb!", "You are amazing!"]
    return winningMessages[Math.floor(Math.random() * 3)]
}

function loseMessages() {
    const losingMessages = ["Sorry, you lost this one.", "Agh, you were so close.", "Computer beats you this time."]
    return losingMessages[Math.floor(Math.random() * 3)]
}

function disableButton() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableButton() {
    buttons.forEach(button => {
        button.disabled = false;
    })
}


playerChoiceButton.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let humanChoice = e.target.id;
        
        playRound(humanChoice, getComputerChoice())
    }  
})

resetButton.addEventListener("click", resetGame)

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerNum.textContent = `Player score: ${playerScore}`
    computerNum.textContent = `Computer score: ${computerScore}`
    parahraphText.textContent = "Game is reseted, play again"
    winText.textContent = "";
    enableButton()
}



function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) parahraphText.textContent = `It's a Tie! Both chose ${humanChoice}.`

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
        )
    {

        playerScore++
        parahraphText.textContent = winMessages();
        playerNum.textContent =`Player score: ${playerScore}`;
        computerNum.textContent = `Computer score: ${computerScore}`;
        
    }

    else {
        computerScore++
        parahraphText.textContent = loseMessages();
        playerNum.textContent = `Player score: ${playerScore}`;
        computerNum.textContent = `Computer score: ${computerScore}`;   
    }

    if (playerScore === 5) {
        winText.textContent = `Congratulations you win!`
        parahraphText.textContent = "";
       disableButton()
    }

    else if (computerScore === 5) {
        winText.textContent = `Sorry, computer beats you :(`
        parahraphText.textContent = "";
        disableButton()
    }

   
    
}













