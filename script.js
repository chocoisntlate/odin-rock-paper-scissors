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
                    console.log(againstMsg);
                    console.log(winMsg);
                    humanScore += 1;    
                } else if (computerChoice == "paper") {
                    console.log(againstMsg);

                    console.log(loseMsg);
                    computerScore += 1;
                } else {
                    console.log(againstMsg);
                    console.log(drawMsg);
                }
                break;
            case "scissors":
                if (computerChoice == "paper") {
                    console.log(againstMsg);
                    console.log(winMsg);
                    humanScore += 1;
                    
                } else if (computerChoice == "rock") {
                    console.log(againstMsg);
                    console.log(loseMsg);
                    computerScore += 1;
                    
                } else {
                    console.log(againstMsg);
                    console.log(drawMsg);
                }
                break;
            case "paper":
                if (computerChoice == "rock") {
                    console.log(againstMsg);
                    console.log(winMsg);
                    humanScore += 1;
                    
                } else if (computerChoice == "scissors") {
                    console.log(againstMsg);
                    console.log(loseMsg);
                    computerScore += 1;
                    
                } else {
                    console.log(againstMsg);
                    console.log(drawMsg);
                }
                break;
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    let gameEnd = false;

    while (!gameEnd) {
        playRound(getHumanChoice(), getComputerChoice());
        if (humanScore == 5) {
            console.log("Congrats! You won the game.");
            gameEnd = true;
        }
        if (computerScore == 5) {
            console.log("Sorry. You lost.");
            gameEnd = true;
        }
    }

}

playGame();