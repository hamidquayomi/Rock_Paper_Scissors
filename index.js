//Create a function that will return a random string
//The function can only return a random string
//This function will represent our opp, the computer
function getComputerChoice(...arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

//Create a function that plays a single round of rock paper scissors. 
//The function should take two parameters. 
//param playerSelection, param computerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "tie";
    }
    else if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return "You lost! Paper beats rock"
        }else{
            return "You won! Rock beats scissors"
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return "You lost! Rock beats scissors"
        }else{
            return "You won! Scissors beats paper"
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return "You lost! Scissors beat paper"
        }else{
            return "You won! Paper beats rock"
        }
    }
}

//declaring the variable playerSelection with a prompting value
//asking the user to pick between rock, paper and scissors
//let playerSelection = ('rock');
//let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
//let result = playRound(playerSelection, computerSelection);
//console.log(result)
//creating a new function called game
//function plays the game 5 times with a while loop
let tieCount = 0;
let playerCount = 0;
let computerCount = 0;
function game(){
    for (let i = 0; i <= 4; i++) {
        let playerSelection = prompt("Choose rock, paper, scissors...");
        let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result === 'tie'){
            tieCount++;
        }
        else if (result === 'You lost! Paper beats rock'){
            computerCount++;
        }
        else if (result === 'You won! Rock beats scissors'){
            playerCount++;
        }
        else if (result === 'You lost! Rock beats scissors'){
            computerCount++;
        }
        else if (result === 'You won! Scissors beats paper'){
            playerCount++;
        }
        else if (result === 'You lost! Scissors beat paper'){
            computerCount++;
        }
        else if (result === 'You won! Paper beats rock'){
            playerCount++;
        }
    }
}

console.log(game())
console.log('Tie count = '+ tieCount)
console.log('Player count = '+ playerCount)
console.log('Computer count = '+ computerCount)
//create a scoreboard
//keep track of player and computer score
//create 2 variables that will track score
//scoreboard starts 0 adds a 1 every time someone wins











