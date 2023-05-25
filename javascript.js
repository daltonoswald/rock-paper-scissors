function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    if (playerSelection == null || playerSelection == "") {
        alert("By not inputting an option you have forfeited this round!");
        return;
    }
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie! The score is " + playerScore + " to " + computerScore)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        console.log("You win, " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        console.log("You lose, " + playerSelection + " loses to " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        console.log("You win, " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        console.log("You lose, " + playerSelection + " loses to " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        console.log("You win, " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        console.log("You lose, " + playerSelection + " loses to " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else {
        computerScore++;
        console.log("Invalid choice! You lose this round by default. The score is " + playerScore + " to " + computerScore);
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        // const playerSelection = 'rock'
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore){
        console.log("You beat the computer " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore){
        console.log("You lost to the computer " + playerScore + " to " + computerScore);
    } else {
        console.log("You tied the computer " + playerScore + " to " + computerScore);
    }
}

game();
