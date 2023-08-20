//Game Playing
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
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let winner = checkWinner();
    function checkWinner(){
        if (player == computer){
            return "That's a tie! Let's continue."
        }
        else if(computer == "rock"){
            return (player == "paper") ? "You Win!" : "You lose!"
        }
        else if(computer == "paper"){
            return (player == "scissors") ? "You Win!" : "You lose!"
        }
        else if(computer == "scissors"){
            return (player == "rock") ? "You Win!" : "You lose!"
        }
    }
    return winner;
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));