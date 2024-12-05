function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Helper function to get computer choice
    function getComputerChoice() {
        let choice = Math.random() * 3;
        if (choice <= 1) {
            choice = "rock";
        } else if (choice > 1 && choice <= 2) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
        return choice;
    }

    // Helper function to get human choice
    function getHumanChoice() {
        let playerChoice = prompt("Please enter one of the following: rock, paper, scissors");
        return playerChoice.toLowerCase();
    }

    // Function to play a single round
    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log(`You chose ${humanChoice}, the computer chose ${computerChoice}. It's a tie.`);
        } else if (
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors")
        ) {
            console.log(`You chose ${humanChoice}, the computer chose ${computerChoice}. You lose this round.`);
            computerScore++;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You chose ${humanChoice}, the computer chose ${computerChoice}. You win this round!`);
            humanScore++;
        } else {
            console.log(`Invalid input: ${humanChoice}. Please choose rock, paper, or scissors.`);
        }
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        playRound();
        console.log(`Score after Round ${round} - Human: ${humanScore}, Computer: ${computerScore}\n`);
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`The computer wins the game with a score of ${computerScore} to ${humanScore}. Better luck next time!`);
    } else {
        console.log(`It's a tie game! Both you and the computer scored ${humanScore}.`);
    }
}

// Start the game
playGame();
