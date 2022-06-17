function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let win = 0;
    if(playerSelection == computerSelection) {win = 2}
    switch(playerSelection){
        case "rock":
            if(computerSelection == "scissors") {win = 1;}
            break;
        case "scissors":
            if(computerSelection == "paper") {win = 1;}
            break;
        
        case "paper":
            if(computerSelection == "rock") {win = 1;}
            break;
    }
    if(win == 1) {return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;}
    if(win == 0) {return `You Lose! ${computerSelection} beats ${playerSelection}`;}
    return `You Tied! ${computerSelection} equals ${playerSelection}`;
}

const playerSelection = "roCk";
var computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));