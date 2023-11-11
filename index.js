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
        return "its a tie";
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


// const paperBtn = document.querySelector('#Paper');
// paperBtn.onclick = () => console.log('Paper');

// const scissorsBtn = document.querySelector('#Scissors');
// scissorsBtn.onclick = () => console.log('Scissors');

//declaring the variable playerSelection with a prompting value
//asking the user to pick between rock, paper and scissors
//let playerSelection = ('rock');
//let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
//let result = playRound(playerSelection, computerSelection);
//console.log(result)
//creating a new function called game
//function plays the game 5 times with a while loop


//..........................................................................//

// function game(){
//         let playerSelection = '';
//         let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result)
//         if (result === 'tie'){
//             tieCount++;
//         }
//         else if (result === 'You lost! Paper beats rock'){
//             computerCount++;
//         }
//         else if (result === 'You won! Rock beats scissors'){
//             playerCount++;
//         }
//         else if (result === 'You lost! Rock beats scissors'){
//             computerCount++;
//         }
//         else if (result === 'You won! Scissors beats paper'){
//             playerCount++;
//         }
//         else if (result === 'You lost! Scissors beat paper'){
//             computerCount++;
//         }
//         else if (result === 'You won! Paper beats rock'){
//             playerCount++;
//         }
// }

// console.log(game())
// console.log('Tie count = '+ tieCount)
// console.log('Player count = '+ playerCount)
// console.log('Computer count = '+ computerCount)
//..........................................................................//
//create a scoreboard
//keep track of player and computer score
//create 2 variables that will track score
//scoreboard starts 0 adds a 1 every time someone win

let tieCount = 0;
let playerCount = 0;
let computerCount = 0;
let maxTries = 6;
let currentTries = 0;

document.getElementById("Rock").onclick = function() {rockFunction()};
function rockFunction() {
    console.log(game())
    console.log('Tie count = '+ tieCount)
    console.log('Player count = '+ playerCount)
    console.log('Computer count = '+ computerCount)

    function game(){
        let playerSelection = 'rock';
        let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result === 'Its a tie'){
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
    currentTries++;
    if (currentTries >= maxTries) {
        tieCount = 0;
        playerCount = 0;
        computerCount = 0;
        currentTries = 0;
    }
    const scoreXD = document.getElementById("demo");
    const text = 'Tie count = ' + tieCount + ' Player count = ' + playerCount + ' Computer count = '+ computerCount
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    scoreXD.appendChild(paragraph)
}

document.getElementById("Paper").onclick = function() {paperFunction()};
function paperFunction() {
    console.log(game())
    console.log('Tie count = '+ tieCount)
    console.log('Player count = '+ playerCount)
    console.log('Computer count = '+ computerCount)

    function game(){
        let playerSelection = 'paper';
        let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result === 'Its a tie'){
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
    currentTries++;
    if (currentTries >= maxTries) {
        tieCount = 0;
        playerCount = 0;
        computerCount = 0;
        currentTries = 0;
    }
    const scoreXD = document.getElementById("demo");
    const text = 'Tie count = ' + tieCount + ' Player count = ' + playerCount + ' Computer count = '+ computerCount
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    scoreXD.appendChild(paragraph)
}

document.getElementById("Scissors").onclick = function() {scissorsFunction()};
function scissorsFunction() {
    console.log(game())
    function game(){
        let playerSelection = 'scissors';
        let computerSelection = getComputerChoice('rock', 'paper', 'scissors');
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result === 'Its a tie'){
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
    currentTries++;
    if (currentTries >= maxTries) {
        tieCount = 0;
        playerCount = 0;
        computerCount = 0;
        currentTries = 0;
    }
    const scoreXD = document.getElementById("demo");
    const text = 'Tie count = ' + tieCount + ' Player count = ' + playerCount + ' Computer count = '+ computerCount
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    scoreXD.appendChild(paragraph)
}






