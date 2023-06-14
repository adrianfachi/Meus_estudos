const controle = document.querySelectorAll("[data-controle]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const atributos = document.querySelectorAll("[data-peca]");
const estatistica = document.querySelectorAll("[data-estatistica]");


controle.forEach((elemento) => {
	elemento.addEventListener("click", (evento) => {
		operaDados(evento.target.dataset.controle, evento.target.parentNode);
		atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
	});
});

function operaDados(operacao, controle) {
	const peca = controle.querySelector("[data-contador]");
	if (operacao === "-") {
		if (peca.value > 0) {
			peca.value--;
		} else {
			peca.value = 0;
		}
	} else {
		peca.value++;
	}
}

function atualizaEstatisticas(peca, operacao) {
	estatistica.forEach((elemento) => {
		if (operacao === "+") {
			elemento.textContent = (Number(elemento.textContent)+(pecas[peca][elemento.dataset.estatistica]))
		} else {
			elemento.textContent = (Number(elemento.textContent)+(pecas[peca][elemento.dataset.estatistica])*-1)
		}
	})
}
