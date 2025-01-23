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

function playRound(humanChoice, computerChoice) {

}

let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice());

console.log(getComputerChoice());
