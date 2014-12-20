
$(document).ready(function(){


	var newNumber = function() {
	var x = Math.floor((Math.random() * 100) + 1);
	console.log(x);
	};

	newNumber();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- TO generate a random number when new game is clicked ---*/
  	$(".new").click(newNumber);



});


