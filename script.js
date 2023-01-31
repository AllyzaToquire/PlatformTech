// Declare an array of choices for the game (rock, paper, scissors)
var choices = ["paper", "rock", "scissors"];

// Generate a random number between 0 and 2 and use it to select a random item from the choices array
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];

// Initialize the scores for the user and the computer to 0
var UserPoints = 0;
var ComPoints = 0;

// Function to display the current score in the HTML element with the id "score"
function score(){
  var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}

setInterval(score, 50);
function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}
function game(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	var comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);
	if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
		win(UserChoice);
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	function continuGame(){
		i = Math.floor(Math.random() * 3);
		ComChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 1200);
}
function win(bn){
	UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1500);
}
function draw(bn){
	document.getElementById("who").innerHTML = "It's a Draw.";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1500);
}
function lose(bn){
	ComPoints++;
	document.getElementById("who").innerHTML = "You lose...";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1500);
}