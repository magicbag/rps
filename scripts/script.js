function getComputerChoice() {
        const choice = ["Rock", "Paper", "Scissors"];
        return choice[Math.floor(Math.random() * 3)];
}

function getUserSelection() {
    return prompt("Enter a choice: Rock, paper or scissors: ");
}

function playRound(playerSelection, computerSelection) {
    const wonRound = "You win!";
    const lostRound = "You lose!";
    const tieRound = "You tied. Both made same choice!";
    const rockPaper = "Paper covers rock.";
    const rockScissors = "Rock crushes scissors.";
    const paperScissors = "Scissors cut paper.";

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
    
    if (playerSelection === computerSelection) {
        return tieRound;
    }

    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return lostRound + " " + rockPaper;
        }
        else {
            return wonRound + " " + rockScissors;
        }
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return wonRound + " " + rockPaper;
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
    }
}

function game() {
    let wins = 0, losses = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getUserSelection(), getComputerChoice());
        if (result.includes("win")) {
            wins++;
        }
        else if (result.includes("lose")) {
            losses++;
        }
        console.log(result);
    }
    console.log(`Final score (wins-losses-ties): ${wins}-${losses}-` + (5 - wins - losses));
}