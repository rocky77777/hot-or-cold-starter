
$(document).ready(function(){


	var x = Math.floor((Math.random() * 100) + 1);
	console.log(x);


	$("#guessButton").on("click", function () {
		var guess = $("#userGuess").val();
		if (guess < x) {
			$("#feedback").text(guess + " is low");
		}
		else if (userGuess > x) {
			$("#feedback").text(guess + " is high");
		}
		else if (userGuess == x) {
			$("#feedback").text(guess + " is perfect");
		}
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- TO generate a random number when NEW GAME is clicked ---*/

	// $("#new").click(function() {
	// 	var x = Math.floor((Math.random() * 100) + 1);
	// 	console.log(x);
	//  });
  	

});


