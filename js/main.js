const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const span1 = document.querySelector(".original");
const span2 = document.querySelector(".new");

let $score;

const add = (a, b) => {
	$score = a + b;
	span1.innerHTML = $score;
};

const multiply = () => {
	const newScore = $score * 2;
	span2.innerText = newScore;
	// lub
	// span2.innerText = $score * 2;
};

const divide = () => {
	const newScore = $score / 2;
	span2.innerText = newScore;
};

btn1.addEventListener("click", multiply);
btn2.addEventListener("click", divide);

add(8, 13);
console.log($score);
