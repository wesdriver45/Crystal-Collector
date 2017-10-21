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

	//determines a value for each gem b/t 1-12
	gemOne = Math.floor((Math.random() *11) + 1);
	gemTwo = Math.floor((Math.random() *11) + 1);
	gemThree = Math.floor((Math.random() *11) + 1);
	gemFour = Math.floor((Math.random() *11) + 1);

	$("#wins").text(wins);
	$("#losses").text(losses);
	
	//click functions for gems
	$("#gemOne").on("click", function() {
		gemTotal = gemTotal + gemOne;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
			} else if (gemTotal > random) {
				losses++;
			}
	});

	$("#gemTwo").on("click", function() {
		gemTotal = gemTotal + gemTwo;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
			} else if (gemTotal > random) {
				losses++;
			}
	});

	$("#gemThree").on("click", function() {
		gemTotal = gemTotal + gemThree;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
			} else if (gemTotal > random) {
				losses++;
			}
	});

	$("#gemFour").on("click", function() {
		gemTotal = gemTotal + gemFour;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
			} else if (gemTotal > random) {
				losses++;
			}
	});





	});


//clicking a gem starts the game

//each click updates the player's score count
//tally wins and losses
//reset gems, random number and gem total