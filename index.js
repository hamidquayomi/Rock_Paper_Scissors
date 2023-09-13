//Create a function that will return a random string
//The function can only return a random string
//This function will represent our opp, the computer
function getComputerChoice(...arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

//Now we are going to create our strings 
//These strings will be randomized once used by the function
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

//Now we're calling our function
//We first declare a variable
//We then give the variable a value of the function
//Within the function we give the parameters, rock, paper, scissors
const game = getComputerChoice(rock, paper, scissors);
console.log(game);

//Create a function that plays a single round of rock paper scissors. 
//The function should take two parameters. 
//param playerSelection, param computerSelection
function playGame(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        console.log("tie")
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            console.log('computer won')
        }else{
            console.log('player won')
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            console.log('computer won')
        }else{
            console.log('player won')
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            console.log('computer won')
        }else{
            console.log('player won')
        }
    }
}
