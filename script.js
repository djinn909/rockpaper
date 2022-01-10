
let computerCount=0; 
let playerCount=0;




const myArray = ["Rock", "Paper", "Scissors"];
let playerSelection = "Rock";


function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

  

  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  
  
  
  function playRound(playerSelection, computerSelection) {
    let result;
    
    if (((playerSelection == "rock") && (computerSelection == "paper"))
    || ((playerSelection == "paper") && (computerSelection == "scissors"))
    || ((playerSelection == "scissors") && (computerSelection == "rock"))) {
    computerCount++;
    return result= "You lose ! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == computerSelection) {
    return result = "Equality ! Play again !"
    } else {
      playerCount++; 
      return result= "You win ! " + playerSelection + " beats " + computerSelection;
      
    }}


  function game() {
  for (let round = 0; round < 5; round++) {

    let finalResult;
    let playerSelection = prompt('Type: Rock, Paper, or Scissors')
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay().toLowerCase();
    console.log(playRound(playerSelection, computerSelection)) 
  }

    if (playerCount < computerCount) {
      return finalResult = "You lose ! Computer wins " + computerCount + "-" + playerCount;
    } else if (playerCount > computerCount) {
      return finalResult = "You win against the computer !" + playerCount + "-" + computerCount;
    } else {
      return finalResult= "Equality ! Play another game !"
    }
   
  }
  console.log(game(playerCount,computerCount))