//make a list of var you think you might need
var random = 0;
var wins = 0;
var losses = 0;
var gemOne = "";
var gemTwo = ""
var gemThree = "";
var gemFour = "";
var gemTotal = 0;



$(document).ready(function() {
	
	//chooses a random number to reach b/t 19-120
	random = Math.floor((Math.random() * 119) +1);
	$("#random").text(random);

	gemOne = Math.floor((Math.random() *11) + 1)
	gemTwo = Math.floor((Math.random() *11) + 1)
	gemThree = Math.floor((Math.random() *11) + 1)
	gemFour = Math.floor((Math.random() *11) + 1)


	});


//clicking a gem starts the game
//also determines a value for each gem b/t 1-12
//each click updates the player's score count
//tally wins and losses
//reset gems, random number and gem total