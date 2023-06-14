const choice = ["Rock", "Paper", "Scissors"];
const wonRound = "You win!";
const lostRound = "You lose!";
const tieRound = "You tied. Both made same choice!";
const rockPaper = "Paper covers rock.";
const rockScissors = "Rock crushes scissors.";
const paperScissors = "Scissors cut paper.";

function getComputerChoice() {
        return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
    
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return tieRound;
        }
        else if (computerSelection == "Paper") {
            return lostRound + " " + rockPaper;
        }
        else {if (computerSelection == "Scissors")
            return wonRound + " " + rockScissors;
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return wonRound + " " + rockPaper;
        }
        else if (computerSelection == "Paper") {
            return tieRound;
        }
        else {
            return lostRound + " " + paperScissors;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return lostRound + " " + rockScissors;
        }
        if (computerSelection == "Paper") {
            return wonRound + " " + paperScissors;
        }
        else {
            return tieRound;
        }
    }
}