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
function game(){
    for (let i = 0; i <= 4; i++) {
        let playerSelection = ('rock');
        let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
    }
}

console.log(game())













