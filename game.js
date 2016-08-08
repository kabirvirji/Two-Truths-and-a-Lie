var score = 0;

var optionOne = document.getElementById("correct-option");
optionOne.onclick = function() {
  score++;
  console.log(score);
};

var optionTwo = document.getElementById("wrong-option-1");
optionTwo.onclick = function() {
  console.log(score);
};

var optionThree = document.getElementById("wrong-option-2");
optionThree.onclick = function() {
  console.log(score);
};
