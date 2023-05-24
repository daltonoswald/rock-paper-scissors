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
        // return "It's a tie!";
        console.log("It's a tie! The score is " + playerScore + " to " + computerScore)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        // return "You win!"
        console.log("You win! " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        // return "You lose!";
        console.log("You lose! " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        // return "You win!";
        console.log("You win! " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        // return "You lose!";
        console.log("You lose! " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        // return "You win!";
        console.log("You win! " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        // return "You lose!";
        console.log("You lose! " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else {
        computerScore++;
        // return "Invalad choice! You lose this round by default. "
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
        // return "You win " + playerScore + " to " + computerScore;
        console.log("You beat the computer " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore){
        // return "You lose " + playerScore + " to " + computerScore;
        console.log("You lost to the computer " + playerScore + " to " + computerScore);
    } else {
        // return "You tied with the computer."
        console.log("You tied the computer " + playerScore + " to " + computerScore);
    }
}

game();


// const playerSelection = 'rock';
// function getPlayerChoice() {
//     let playerSelection = prompt("Rock, Paper, or Scissors?");
//     playerSelection = playerSelection.toLowerCase();
//     return playerSelection;
// }
// getPlayerChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(playerSelection, computerSelection);


// const playerSelection = prompt("What is your selection?");
// function getPlayerChoice() {
// playerSelectionEdited = playerSelection.toLowerCase();
// return playerSelectionEdited;
// }
// console.log(getPlayerChoice());
