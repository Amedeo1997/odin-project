/*
Pseudo code 
Create a function getComputerChoice
getComputerChoice will randomly return one of the following string : rock, paper, scissors.
console log to see if it's working

create a function named getHumanChoice
getHumanChoice will return one of the valid choices depending on what the user inputs (use prompt).
test with consolelog

declare the player score variables
create two variables named humanScore and computerScore in the global scope
initialize the variables with the value of 0

write the logic to play a single round
create a new function named playRound
define two parameters for playRound : humanChoice and computerChoice. use them to take the human
and computer choices as arguments.
make humanChoice case-insensitive ex: rock ROCK roCk ROCK should work
write the chode for playRound function to console.log a string value representing the round winner,such as:"You Lose! Paper beats Rock"
Increment the humanScore or computerScore variables on the round winner.

write the logic to play the entire game.
the game will play 5 rounds. 
write a function named playZGame that calls playRound to play 5 rounds. keep tracks of the scores and delcares a winner at the end.
create a function named playGame
move the playRound function and score var so that they're declared inside of the new playGame function
play 5 rounds by calling playRound 5 times.
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random() * 3
    if (choice <= 1) {
        choice = "rock"
    } else if (choice > 1 && choice <= 2 ) {
        choice = "paper";
    } else 
        choice = "scissors";

    return choice;
}

function getHumanChoice() {
    let playerChoice = prompt("Please enter one of the followings: rock, paper, scissors");
    return playerChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(humanChoice, computerChoice);
}

playRound();