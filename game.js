var arr = ["rock", "paper","scissors"];
var playerscore = 0;
var compscore = 0;
const btn_rock = document.querySelector('.rock');
const btn_paper = document.querySelector('.paper');
const btn_scissors = document.querySelector('.scissors');


function getComputerChoice(x){ // generates random choices for computer
	var x = x[Math.floor(Math.random() * x.length)];
	return x;
}


// playser event choices selection

btn_rock.addEventListener('click', () =>{
    //document.getElementsByClassName("user_score")[0].src = "/images/Rock.png";
    
    let playerSelection = arr[0].toLowerCase();
    game(playerSelection);
  
  });
  
btn_paper.addEventListener('click', () =>{
    
    let playerSelection = arr[1].toLowerCase();
    game(playerSelection);
  
  });
  
btn_scissors.addEventListener('click', () =>{

    let playerSelection = arr[2].toLowerCase();// player variable == button type 
    // call game function 
    game(playerSelection);
  
  });
  

// round input
//var rounds = prompt("Enter amount of rounds you'd like to play: ");


function game(user_in){ 
  
	for(let i = 0; i < 1; ++i){ // rounds that game will be ran
    
		let computerSelection = getComputerChoice(arr).toLowerCase();
		playround(user_in,computerSelection);
  
    if (i+1 == 1){
    	if (playerscore <= 5){
        const element = document.getElementById("user_score");
        element.textContent = `${playerscore}`;
      	console.log(`Player wins by ${playerscore} points`);

        if (playerscore == 5){
          const element = document.getElementById("winner");
          element.textContent = 'Player wins';
      	  

        }
      }
    	
      if (compscore <= 5){
        const element1 = document.getElementById("bot_score");
        element1.textContent = `${compscore}`;
      	console.log(`Computer wins by ${compscore} points`);

        if(compscore == 5){
          const element1 = document.getElementById("winner");
          element1.textContent = 'Computer wins';
          
        }
        
      }
    }
    
	}
}

//gamerounds function
function playround(user_in,computerSelection){
	let i = true; // flag 
  if (user_in == "rock" && computerSelection == "paper"){
  	console.log("Computer wins");
    compscore +=1;// playerscore counter
    i = false;//Break 
  	}
    
  if (user_in == "paper" && computerSelection == "rock"){
  	console.log("Player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (user_in == "rock" && computerSelection == "scissors"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (user_in == "scissors" && computerSelection == "rock"){
  	console.log("Computer wins");
    compscore +=1;//computer score counter
    i = false;
  	}
    
  if (user_in == "scissors" && computerSelection == "paper"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (user_in == "paper" && computerSelection == "scissors"){
  	console.log("Computer wins");
    compscore +=1;
    i = false; 
  	}
    
	else if(user_in == computerSelection){
    console.log("tie");
    i = false; 
  	}
    
  }

game()