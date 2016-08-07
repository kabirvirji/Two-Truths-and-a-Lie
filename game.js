var score = 0;

// increase score for correct answer
document.getElementById('button-correct').onclick = function() {
   score++ ;
   console.log(score);
};

document.getElementById('button-wrong-1').onclick = function() {
   console.log("Oops, wrong answer!");
};

document.getElementById('button-wrong-2').onclick = function() {
   console.log("Oops, wrong answer!");
};

document.querySelector('.results').innerHTML = score;

console.log(score);


