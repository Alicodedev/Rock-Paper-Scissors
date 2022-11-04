var arr = ["rock", "paper","scissors"];
var playerscore = 0;
var compscore = 0;

function getComputerChoice(x){
	var x = x[Math.floor(Math.random() * x.length)];
	return x;
}

function game(){ 
	const rounds = prompt("Enter amount of rounds you'd like to play: ");
  
	for(var i = 0; i < rounds; ++i){ // rounds that game will be ran
    var playerSelection = prompt("Player turn").toLowerCase();
		var computerSelection = getComputerChoice(arr).toLowerCase();
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
  	console.log("Computer wins");
    compscore +=1;// playerscore counter
    i = false;//Break 
  	}
    
  if (playerSelection == "paper" && computerSelection == "rock"){
  	console.log("Player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (playerSelection == "rock" && computerSelection == "scissors"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (playerSelection == "scissors" && computerSelection == "rock"){
  	console.log("Computer wins");
    compscore +=1;//computer score counter
    i = false;
  	}
    
  if (playerSelection == "scissors" && computerSelection == "paper"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (playerSelection == "paper" && computerSelection == "scissors"){
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

//game()