
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return 'Rock';
        case 1:
        return 'Paper';
        case 2:
        return 'Scissors';
    }
}
/*function playerSelection() {
    playerSelection = window.prompt("Rock, Paper or Scissors?");
}*/
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        return "That's a tie! Let's continue."
    }
    else if(computerSelection=="rock"){
        return (playerSelection == "paper") ? "You Win!" : "You lose!"
    }
    else if(computerSelection=="paper"){
        return (playerSelection == "scissors") ? "You Win!" : "You lose!"
    }
    else if(computerSelection=="scissors"){
        return (playerSelection == "rock") ? "You Win!" : "You lose!"
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));