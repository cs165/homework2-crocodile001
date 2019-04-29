// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

var testOne = 0;
var testTwo = 0;
var testThree = 0;
var chosen_1;
var chosen_2;
var chosen_3;

function reset(){
	const article = document.querySelector('article');
	const div = article.querySelector('.divspace');
	article.removeChild(div);

	const divAll = document.querySelectorAll('section div');
	for (const box of divAll) {
		let img = box.querySelector('.checkbox');
		img.src = 'images/unchecked.png';
		box.style.opacity = "1";
		box.style.backgroundColor = "#f4f4f4";
	}

	testOne = 0;
	testTwo = 0;
	testThree = 0;
	let dives = document.querySelectorAll('.testOne div');
	for (const box of dives) {
		box.addEventListener('click', change);
		//Boxes.push(box);
	}
	dives = document.querySelectorAll('.testTwo div');
	for (const box of dives) {
		box.addEventListener('click', change2);
		//Boxes2.push(box);
	}
	dives = document.querySelectorAll('.testThree div');
	for (const box of dives) {
		box.addEventListener('click', change3);
		//Boxes3.push(box);
	}

	const question = document.querySelector('.question-name');
	question.scrollIntoView();
}

function answer(){
	console.log(chosen_1.dataset.choiceId);
	console.log(chosen_2.dataset.choiceId);
	console.log(chosen_3.dataset.choiceId);

	//console.log(RESULTS_MAP[chosen_1.dataset.choiceId].title);

	let inside = 0;
	let title = 'You got: ';
	let contents;
	if(chosen_1.dataset.choiceId != chosen_2.dataset.choiceId){ if(chosen_1.dataset.choiceId != chosen_3.dataset.choiceId){ 
		if(chosen_2.dataset.choiceId == chosen_3.dataset.choiceId){
			console.log(RESULTS_MAP[chosen_2.dataset.choiceId].title);
			title += RESULTS_MAP[chosen_2.dataset.choiceId].title;
			contents = RESULTS_MAP[chosen_2.dataset.choiceId].contents;
		}
		else{
			console.log(RESULTS_MAP[chosen_1.dataset.choiceId].title);
			title += RESULTS_MAP[chosen_1.dataset.choiceId].title;
			contents = RESULTS_MAP[chosen_1.dataset.choiceId].contents;
		}
		inside = 1;
	}}
	if(!inside){
		console.log(RESULTS_MAP[chosen_1.dataset.choiceId].title);
		title += RESULTS_MAP[chosen_1.dataset.choiceId].title;
		contents = RESULTS_MAP[chosen_1.dataset.choiceId].contents;
	}


	const article = document.querySelector('article');
	const div = document.createElement('div');
	div.classList.add("divspace");
	article.appendChild(div);

	const h1 = document.createElement('h1');
	h1.classList.add("h1space");
	h1.textContent = title;
	div.appendChild(h1);

	const p = document.createElement('p');
	p.classList.add("pspace");
	p.textContent = contents;
	div.appendChild(p);

	const btn = document.createElement('button');
	btn.classList.add("btn");
	btn.textContent = 'Restart quiz';
	btn.addEventListener('click', reset);
	div.appendChild(btn);
}

function finish(){
	//console.log(testOne);
	//console.log(testTwo);
	//console.log(testThree);
	if (testOne === 1){ if (testTwo === 1){ if (testThree === 1){
		console.log("finish");
		let divAll = document.querySelectorAll('.testOne div');
		for (const box of divAll) {
			box.removeEventListener('click', change);
		}
		divAll = document.querySelectorAll('.testTwo div');
		for (const box of divAll) {
			box.removeEventListener('click', change2);
		}
		divAll = document.querySelectorAll('.testThree div');
		for (const box of divAll) {
			box.removeEventListener('click', change3);
		}

		answer();
	}}}
}

function chosen(chosen){
	chosen_1 = chosen;
	const img = chosen.querySelector('.checkbox');
	img.src = 'images/checked.png';
	chosen.style.opacity = "1";
	chosen.style.backgroundColor = "#cfe3ff";

	const indexToRemove = Boxes.indexOf(chosen);
  	Boxes.splice(indexToRemove, 1);

  	for (const box of Boxes) {
  		const imgs = box.querySelector('.checkbox');
		imgs.src = 'images/unchecked.png';
		box.style.opacity = "0.6";
		box.style.backgroundColor = "#f4f4f4";
	}

	Boxes = [];
	const dives = document.querySelectorAll('.testOne div');
	for (const box of dives) {
		Boxes.push(box);
	}
}

function change(event) {
	testOne = 1;
	chosen(event.currentTarget);
	finish();
}

var Boxes = [];

const dives = document.querySelectorAll('.testOne div');
for (const box of dives) {
	box.addEventListener('click', change);
	Boxes.push(box);
}





function chosen2(chosen){
	chosen_2 = chosen;
	const img = chosen.querySelector('.checkbox');
	img.src = 'images/checked.png';
	chosen.style.opacity = "1";
	chosen.style.backgroundColor = "#cfe3ff";

	const indexToRemove = Boxes2.indexOf(chosen);
  	Boxes2.splice(indexToRemove, 1);

  	for (const box of Boxes2) {
  		const imgs = box.querySelector('.checkbox');
		imgs.src = 'images/unchecked.png';
		box.style.opacity = "0.6";
		box.style.backgroundColor = "#f4f4f4";
	}

	Boxes2 = [];
	const dives2 = document.querySelectorAll('.testTwo div');
	for (const box of dives2) {
		Boxes2.push(box);
	}
}

function change2(event) {
	testTwo = 1;
	chosen2(event.currentTarget);
	finish();
}

var Boxes2 = [];

const dives2 = document.querySelectorAll('.testTwo div');
for (const box of dives2) {
	box.addEventListener('click', change2);
	Boxes2.push(box);
}





function chosen3(chosen){
	chosen_3 = chosen;
	const img = chosen.querySelector('.checkbox');
	img.src = 'images/checked.png';
	chosen.style.opacity = "1";
	chosen.style.backgroundColor = "#cfe3ff";

	const indexToRemove = Boxes3.indexOf(chosen);
  	Boxes3.splice(indexToRemove, 1);

  	for (const box of Boxes3) {
  		const imgs = box.querySelector('.checkbox');
		imgs.src = 'images/unchecked.png';
		box.style.opacity = "0.6";
		box.style.backgroundColor = "#f4f4f4";
	}

	Boxes3 = [];
	const dives3 = document.querySelectorAll('.testThree div');
	for (const box of dives3) {
		Boxes3.push(box);
	}
}

function change3(event) {
	testThree = 1;
	chosen3(event.currentTarget);
	finish();
}

var Boxes3 = [];

const dives3 = document.querySelectorAll('.testThree div');
for (const box of dives3) {
	box.addEventListener('click', change3);
	Boxes3.push(box);
}
