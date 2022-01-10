
const myArray = ["Rock", "Paper", "Scissors"];
let playerSelection = "Rock";


function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];}

  

  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();

 function playRound(playerSelection, computerSelection) {
    let result;
    
    
    if (((playerSelection == "rock") && (computerSelection == "paper"))
    || ((playerSelection == "paper") && (computerSelection == "scissors"))
    || ((playerSelection == "scissors") && (computerSelection == "rock"))) {
    return result = "You lose ! " + computerSelection + " beats " + playerSelection
    } else if (playerSelection == computerSelection) {
    return result = "Equality ! Play again !"
    } else {
      return result = "You win ! " + playerSelection + " beats " + computerSelection }

  }
  


  
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));