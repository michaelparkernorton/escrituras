import data from './json/livroDeMormon.json' assert { type: 'json' };

const cardContainer = document.querySelector("[card-container]");
const cardTemplate = document.querySelector("[card-template]");

// Render all cards
function renderCards(data, container) {
	data.forEach(escritura => {

		if (escritura.referência !== "") {
			const card = cardTemplate.content.cloneNode(true).children[0];
			const referencia = card.querySelector("[card-referencia]");
			const palavras = card.querySelector("[card-palavras]");
			referencia.textContent = escritura.referência;
			palavras.textContent = escritura.palavras;
			container.append(card);
		}
	});
}

const date = new Date();
const time = date.getHours();
renderCards(data, cardContainer);
const cards = document.querySelectorAll(".card");
const body = document.querySelector("body");

if (time >= 20 || time <= 5) {	
	cards.forEach(card => {
		card.classList.add('dark');
	});
	body.style.backgroundColor = "black";
}


function addClassAnimate(number) {
	cards[number].classList.add('animate');
}

addClassAnimate(0);


cards[1].classList.add('second');
