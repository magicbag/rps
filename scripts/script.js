let wins = 0;
let losses = 0;

function getComputerChoice() {
        const choice = ["Rock", "Paper", "Scissors"];
        return choice[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    const wonRound = "You win!";
    const lostRound = "You lose!";
    const tieRound = "You tied. Both made same choice!";
    const rockPaper = "Paper covers rock.";
    const rockScissors = "Rock crushes scissors.";
    const paperScissors = "Scissors cut paper.";

    computerSelection = getComputerChoice();
    playerSelection = e.target.textContent;

    if (playerSelection === computerSelection) {
        return;
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            losses++;
        }
        else {
            wins++;
        }
    }

    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            wins++;
        }
        else {
            losses++;
        }
    }

    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            losses++;
        }
        if (computerSelection === "Paper") {
            wins++;
        }
    }
    
    const results = document.querySelector('.results');
    results.textContent = `Wins: ${wins}, Losses: ${losses}`;

    if (wins === 5) {
        results.textContent = 'And the winner is you!';
    }
    if (losses === 5) {
        results.textContent = 'And the winner is the computer!';
    }
}

const btn = document.querySelectorAll('.btn');
btn.forEach(elem => {
    elem.addEventListener('click', playRound);
});