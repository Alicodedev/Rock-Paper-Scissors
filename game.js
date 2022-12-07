var arr = ["rock", "paper","scissors"];
var playerscore = 0;
var compscore = 0;
const btn_rock = document.querySelector('.rock');
const btn_paper = document.querySelector('.paper');
const btn_scissors = document.querySelector('.scissors');
let image = document.querySelector('#user_choice > img'); // accessing img element within div of that id
let image_bot = document.querySelector('#bot_choice > img')


function getComputerChoice(x){ // generates random choices for computer
	var x = x[Math.floor(Math.random() * x.length)];
	return x;
}


// playser event choices selection
btn_rock.addEventListener('click', () =>{
    let computerSelection = getComputerChoice(arr).toLowerCase();
    image.src = "images/rock.png";
    image_bot.src = `images/${computerSelection}.png`;
    let playerSelection = arr[0].toLowerCase();
    image_bot.src = `images/${computerSelection}.png`;
    game(playerSelection,computerSelection);
  
  });
  
btn_paper.addEventListener('click', () =>{
    let computerSelection = getComputerChoice(arr).toLowerCase();
    image.src = "images/paper.png";
    image_bot.src = `images/${computerSelection}.png`;
    let playerSelection = arr[1].toLowerCase();
    
    game(playerSelection,computerSelection);
  
  });
  
btn_scissors.addEventListener('click', () =>{
    let computerSelection = getComputerChoice(arr).toLowerCase();// runs computer choice in parallel with player event
    image.src = "images/scissors.png";
    image_bot.src = `images/${computerSelection}.png`;
    let playerSelection = arr[2].toLowerCase();// player variable == button type 
    // call game function 
    
    game(playerSelection,computerSelection);
  
  });
  

// round input
//var rounds = prompt("Enter amount of rounds you'd like to play: ");


function game(user_in,bot_in){ 
  
	for(let i = 0; i < 1; ++i){ // rounds that game will be ran

		
		playround(user_in,bot_in);
  
    if (i+1 == 1){
    	if (playerscore <= 5){
        const element = document.getElementById("user_score");
        element.textContent = `${playerscore}`;
      	console.log(`Player wins by ${playerscore} points`);

        if (playerscore == 5){
          const element = document.getElementById("winner");
          element.textContent = 'Player wins';
          playerscore = playerscore
  
        }
      }
    	
      if (compscore <= 5){
        const element1 = document.getElementById("bot_score");
        element1.textContent = `${compscore}`;
      	console.log(`Computer wins by ${compscore} points`);

        if(compscore == 5){
          const element1 = document.getElementById("winner");
          element1.textContent = 'Computer wins';
          compscore = compscore

        }
        
      }
    }
    
	}
}

//gamerounds function
function playround(user_in,bot_in){
	let i = true; // flag 
  if (user_in == "rock" && bot_in == "paper"){
  	console.log("Computer wins");
    compscore +=1;// playerscore counter
    i = false;//Break 
  	}
    
  if (user_in == "paper" && bot_in == "rock"){
  	console.log("Player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (user_in == "rock" && bot_in == "scissors"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (user_in == "scissors" && bot_in == "rock"){
  	console.log("Computer wins");
    compscore +=1;//computer score counter
    i = false;
  	}
    
  if (user_in == "scissors" && bot_in == "paper"){
  	console.log("player wins");
    playerscore +=1;
    i = false;
  	}
    
  if (user_in == "paper" && bot_in == "scissors"){
  	console.log("Computer wins");
    compscore +=1;
    i = false; 
  	}
    
	else if(user_in == bot_in){
    console.log("tie");
    const element = document.getElementById("winner");
    element.textContent = 'Tie';
    i = false; 
  	}
    
  }

game()