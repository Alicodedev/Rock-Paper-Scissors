var arr = ["rock", "paper","scissors"];

function getComputerChoice(x){
	var x = x[Math.floor(Math.random() * x.length)];
	return x;
}

function game(){ 
	const rounds = prompt("Enter amount of rounds you'd like to play: ");
  var playerscore = 0;
  var compscore = 0;
  const playerSelection = prompt("Player turn");
	const computerSelection = prompt("Computer turn");
	for(var i = 0; i < rounds; ++i){ // rounds that game will be ran
		playround(playerSelection,computerSelection);
	}
}

//gamerounds function
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

game()
