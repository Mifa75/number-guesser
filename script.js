let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => Math.floor(Math.random() * 9) + 1;

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const userDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);

    if (userDifference === computerDifference || userDifference < computerDifference) {
        return true;
    } else {
        return false;
    }
};

const targetNumber = generateTarget();

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
        return 'true';
    } else if (winner === 'computer') {
        computerScore += 1;
        return 'false';
    }
};

const advanceRound = () => {
    return currentRoundNumber += 1;
};