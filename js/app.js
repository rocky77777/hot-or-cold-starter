
$(document).ready(function(){

	var x;
	var guessCount = 0;
	
	function init() {
		x = Math.floor((Math.random() * 100) + 1);
		$("#feedback").text("Make your Guess");
		$("#guessList").find("li").remove();
		$("form")[0].reset();
		$("#count").text("0");
		guessCount = 0;
		console.log(x);
	}

	/*--- Generate random number when page loads ---*/
	init();


	/*--- Generate random number and reset game when NEW GAME is clicked ---*/
	$(".new").click(function() {
	init(); 
	});

	$("#guessButton").on("click", function (event) {
		var guess = $("#userGuess").val();
		guessCount++;
		$("#count").text(guessCount);
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
			$("#feedback").text(guess + " is perfect. Click on NEW GAME to play again!");
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


