// function getPlayerChoice() {
//     let playerSelection = prompt("Rock, Paper, or Scissors?");
//     if (playerSelection == null || playerSelection == "") {
//         alert("By not inputting an option you have forfeited this round!");
//         return;
//     }
//     playerSelection = playerSelection.toLowerCase();
//     return playerSelection;
// }

const gameOver = () => {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    const newGame = document.createElement('button');
    newGame.innerText = 'Play again!';
    newGame.id = 'newGame';
    newGame.addEventListener('click', () => {
    window.location.reload();
    });
    document.body.appendChild(newGame);
};

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

let playerScore = 0;
let computerScore = 0;

// const btnRock = document.querySelector('#btnRock');
// btnRock.addEventListener('click', playRound);

// const btnPaper = document.querySelector('#btnPaper');
// btnPaper.addEventListener('click', playRound);

// const btnScissors = document.querySelector('#btnScissors');
// btnScissors.addEventListener('click', playRound);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let results = "";
    if (playerSelection === computerSelection) {
        results = ("It's a tie! You both selected " + computerSelection + ". The score is " + playerScore + " to " + computerScore)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        results = ("You win, " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        results = ("You lose, " + playerSelection + " loses to " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        results = ("You win, " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        results = ("You lose, " + playerSelection + " loses to " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        results = ("You win, " + playerSelection + " beats " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        results = ("You lose, " + playerSelection + " loses to " + computerSelection + ". The score is " + playerScore + " to " + computerScore);
    } else {
        computerScore++;
        results = ("Invalid choice! You lose this round by default. The score is " + playerScore + " to " + computerScore);
    }
    if (playerScore == 5) {
        results = ("You won the game, " + playerScore + " to " + computerScore + "! Please refresh to play again!");
        gameOver();
    } else if (computerScore == 5) {
        results = ("You lost the game, " + playerScore + " to " + computerScore + "! Please refresh to play again!");
        gameOver();
    }
    document.getElementById('results').innerHTML = results;
}




// function game() {
//     // for (let i = 1; i <= 5; i++) {
//         // const playerSelection = getPlayerChoice();
//         // const playerSelection = 'rock'
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//     // }

//     if (playerScore > computerScore){
//         console.log("You beat the computer " + playerScore + " to " + computerScore);
//     } else if (playerScore < computerScore){
//         console.log("You lost to the computer " + playerScore + " to " + computerScore);
//     } else {
//         console.log("You tied the computer " + playerScore + " to " + computerScore);
//     }
// }

// // game();
