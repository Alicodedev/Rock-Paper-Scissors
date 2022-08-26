var arr = ["rock", "paper","scissors"];

function getComputerChoice(x){
	var x = x[Math.floor(Math.random() * x.length)];
	return x;
}

console.log(getComputerChoice(arr));

// Round function
const playerSelection = prompt("Player turn");
const computerSelection = prompt("Computer turn");
function playround(playerSelection,computerSelection){
	var i = true; // flag 
	while (i == true){
  if (playerSelection == "rock" && computerSelection == "paper"){
  	console.log("player wins");
    i = false;//Break 
  	}
    
  if (playerSelection == "paper" && computerSelection == "rock"){
  	console.log("Computer wins");
    i = false;
  	}
    
  if (playerSelection == "rock" && computerSelection == "sisscors"){
  	console.log("player wins");
    i = false;
  	}
    
  if (playerSelection == "sisscors" && computerSelection == "rock"){
  	console.log("Computer wins");
    i = false;
  	}
    
  if (playerSelection == "sisscors" && computerSelection == "paper"){
  	console.log("player wins");
    i = false;
  	}
    
  if (playerSelection == "paper" && computerSelection == "sisscors"){
  	console.log("Computer wins");
    i = false; 
  	}
    
	else if(playerSelection == computerSelection){
    console.log("tie");
    i = false; 
  	}
    
  }
}

playround(playerSelection,computerSelection)
