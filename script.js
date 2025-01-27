function getComputerChoice() {
    let value = Math.random();
    
    if (value < 1/3) {
        return "rock";
    }
    if (value > 1/3 && value <2/3) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("Choose between 'rock', 'paper', 'scisscors'");
}



function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase(); 
    
        let winMsg = "You win!"
        let loseMsg = "You lose!"
        let drawMsg = "Draw!"
        let againstMsg = humanChoice + " vs " + computerChoice

        switch (humanChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    humanScore += 1;    
                    choices.textContent = againstMsg;
                    winner.textContent = winMsg;
                } else if (computerChoice == "paper") {
                    computerScore += 1;
                    choices.textContent = againstMsg;
                    winner.textContent = loseMsg;
                } else {
                    choices.textContent = againstMsg;
                    winnter.textContent = drawMsg;
                }
                break;
            case "scissors":
                if (computerChoice == "paper") {
                    humanScore += 1;    
                    choices.textContent = againstMsg;
                    winner.textContent = winMsg;
                    
                } else if (computerChoice == "rock") {
                    computerScore += 1;    
                    choices.textContent = againstMsg;
                    winner.textContent = loseMsg;
                    
                } else {
                    choices.textContent = againstMsg;
                    winner.textContent = drawMsg;
                }
                break;
            case "paper":
                if (computerChoice == "rock") {
                    humanScore += 1;    
                    choices.textContent = againstMsg;
                    winner.textContent = winMsg;
                    
                } else if (computerChoice == "scissors") {
                    computerScore += 1;    
                    choices.textContent = againstMsg;
                    winner.textContent = loseMsg;
                    
                } else {
                    choices.textContent = againstMsg;
                    winner.textContent = drawMsg;
                }
                break;
        }
        score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    }

    let humanScore = 0;
    let computerScore = 0;

    let choices = document.querySelector("#choices");
    let winner = document.querySelector("#winner");
    let score = document.querySelector("#score");

    let selections = document.querySelector("#selections");
    selections.addEventListener('click', function(event) {
        let target = event.target;

        switch (target.id) {
            case 'rock':
                playRound('rock', getComputerChoice());
                break;

            case 'paper':
                playRound('paper', getComputerChoice());
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice());
                break;
        }

    })



}

playGame();