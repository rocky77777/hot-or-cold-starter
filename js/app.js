
$(document).ready(function(){

	/*--- Generate random number when page loads ---*/
	var x = Math.floor((Math.random() * 100) + 1);
	console.log(x);
	/*--- Generate random number when NEW GAME is clicked ---*/
	$(".new").click(function() {
	x = Math.floor((Math.random() * 100) + 1);
	console.log(x);
	});


	$("#guessButton").on("click", function (event) {
		var guess = $("#userGuess").val();
		$("#guessList").append("<li>" + guess + "</li>");
		event.preventDefault();
		if (guess < x) {
			$("#feedback").text();
			if (Math.abs(guess - x) < 20) {
				$("#feedback").text(guess + " is low but hot!");
				if (Math.abs(guess - x) < 5) {
					$("#feedback").text(guess + " is low but super hot!");
				}
			} else
				$("#feedback").text(guess + " is low and cold.");
		}
		else if (guess > x) {
			$("#feedback").text(guess + " is high");
			if (Math.abs(guess - x) < 20) {
				$("#feedback").text(guess + " is high but hot!");
				if (Math.abs(guess - x) < 5) {
					$("#feedback").text(guess + " is high but super hot!");
				}
			} else
				$("#feedback").text(guess + " is high and cold.");
		}
		else if (guess == x) {
			$("#feedback").text(guess + " is perfect");
			x = Math.floor((Math.random() * 100) + 1);
			console.log(x);	
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
});


