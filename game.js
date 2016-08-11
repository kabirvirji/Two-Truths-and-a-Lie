var score = 0;
document.getElementById("score").innerHTML = "Score: " + score;

var questionOne_one = document.getElementById("truth-1");
var questionOne_two = document.getElementById("truth-2");
var questionOne_three = document.getElementById("lie");

function Lie(parameter) {
	if (score == 1) {
		var flag_one = false;
	} else {
		var flag_one = true;
	}
	if (flag_one) {
		score++;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
}

questionOne_three.addEventListener("click", Lie);



// var optionOne = document.getElementById("correct-option");
// optionOne.onclick = function() {
//   score++;
//   console.log(score);
// };

// var optionTwo = document.getElementById("wrong-option-1");
// optionTwo.onclick = function() {
//   console.log(score);
// };

// var optionThree = document.getElementById("wrong-option-2");
// optionThree.onclick = function() {
//   console.log(score);
// };

// document.querySelector("score").innerHTML = score;
