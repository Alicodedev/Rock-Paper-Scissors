var arr = ["rock", "paper","scissors"];

function getComputerChoice(x){
	var x = x[Math.floor(Math.random() * x.length)];
	return x;
}

console.log(getComputerChoice(arr));

// Round function
var player = prompt("Player turn");
var computer = prompt("Computer turn");
function playround(playerselection,computerselection){
	var i = true; // flag 
	while (i == true){
  if (playerselection == "rock" && computerselection == "paper"){
  	console.log("player wins");
    i = false;
  	}
  }
}

playround(player,computer)
