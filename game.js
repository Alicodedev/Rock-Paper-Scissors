var arr = ["rock", "paper","scissors"];

function getComputerChoice(x){
	var x = x[Math.floor(Math.random() * x.length)];
	return x;
}

var playerscore = 0;
var compscore = 0;
function game(){ 
	const rounds = prompt("Enter amount of rounds you'd like to play: ");
  
	for(var i = 0; i < rounds; ++i){ // rounds that game will be ran
    const playerSelection = prompt("Player turn");
		const computerSelection = prompt("Computer turn");
		playround(playerSelection,computerSelection);
  
    if (i+1 == rounds){
    	if (playerscore > compscore){
      	console.log(`Player wins by ${playerscore} points`);
      }
    	
      if (compscore > playerscore){
      	console.log(`Computer wins by ${compscore} points`);
      }
    }
    
	}
}

//gamerounds function
function playround(playerSelection,computerSelection){
	var i = true; // flag 
	while (i == true){
  if (playerSelection == "rock" && computerSelection == "paper"){
  	console.log("player wins");
    playerscore +=1;// playerscore counter
    i = false;//Break 
  	}
    
  if (playerSelection == "paper" && computerSelection == "rock"){
  	console.log("Computer wins");
    compscore +=1;
    i = false;
  	}
    
  if (playerSelection == "rock" && computerSelection == "sisscors"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (playerSelection == "sisscors" && computerSelection == "rock"){
  	console.log("Computer wins");
    compscore +=1;//computer score counter
    i = false;
  	}
    
  if (playerSelection == "sisscors" && computerSelection == "paper"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (playerSelection == "paper" && computerSelection == "sisscors"){
  	console.log("Computer wins");
    compscore +=1;
    i = false; 
  	}
    
	else if(playerSelection == computerSelection){
    console.log("tie");
    i = false; 
  	}
    
  }
}

game()