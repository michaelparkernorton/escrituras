import data from './json/livroDeMormon.json' assert { type: 'json' };

const cardContainer = document.querySelector("[card-container]");
const cardTemplate = document.querySelector("[card-template]");

// Render all cards
function renderCards(data, container) {
	data.forEach(escritura => {
		const card = cardTemplate.content.cloneNode(true).children[0];
		console.log(card);
		const referencia = card.querySelector("[card-referencia]");
		const palavras = card.querySelector("[card-palavras]");
		referencia.textContent = escritura.referência;
		palavras.textContent = escritura.palavras;
		container.append(card);
	});
}

renderCards(data, cardContainer);

