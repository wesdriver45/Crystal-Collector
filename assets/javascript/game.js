//make a list of var you think you might need
var random = 0;
var wins = 0;
var losses = 0;
var gemOne = Math.floor((Math.random() * 12) + 1);
var gemTwo = Math.floor((Math.random() * 12) + 1);
var gemThree = Math.floor((Math.random() * 12) + 1);
var gemFour = Math.floor((Math.random() * 12) + 1);
var gemTotal = 0;



$(document).ready(function() {
	
	//chooses a random number to reach b/t 19-120
	random = Math.floor(Math.random() * (120 - 19)) + 19;
	$("#random").text(random);

	
	
	
	
	//click functions for gems
	$("#gemOne").on("click", function() {
		gemTotal = gemTotal + gemOne;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
				$("#wins").text(wins);
				reset();
			} else if (gemTotal > random) {
				losses++;
				$("#losses").text(losses);
				reset();
			}
	});

	$("#gemTwo").on("click", function() {
		gemTotal = gemTotal + gemTwo;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
				$("#wins").text(wins);
				reset();
			} else if (gemTotal > random) {
				losses++;
				$("#losses").text(losses);
				reset();
			}
	});

	$("#gemThree").on("click", function() {
		gemTotal = gemTotal + gemThree;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
				$("#wins").text(wins);
				reset();
			} else if (gemTotal > random) {
				losses++;
				$("#losses").text(losses);
				reset();
			}
	});

	$("#gemFour").on("click", function() {
		gemTotal = gemTotal + gemFour;
			$("#gemTotal").text(gemTotal);

			if (gemTotal === random) {
				wins ++;
				$("#wins").text(wins);
				reset();
			} else if (gemTotal > random) {
				losses++;
				$("#losses").text(losses);
				reset();
			}
	});

	function reset() {
		gemTotal = 0;
		$("#gemTotal").text(gemTotal);

		random = Math.floor(Math.random() * (120 - 19)) + 19;
		$("#random").text(random);

		gemOne = Math.floor((Math.random() * 12) + 1);
		gemTwo = Math.floor((Math.random() * 12) + 1);
		gemThree = Math.floor((Math.random() * 12) + 1);
		gemFour = Math.floor((Math.random() * 12) + 1);
	}





	});


//clicking a gem starts the game

//each click updates the player's score count
//tally wins and losses
//reset gems, random number and gem total