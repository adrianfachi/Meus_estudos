const clientes = require("./clientes.json");

function ordenar(propriedades) {
	const resultado = clientes.sort((a, b) => {
		if (a[propriedades] < b[propriedades]) {
			return -1;
		} else if(a[propriedades] > b[propriedades]) {
			return 1;
		} else {
            return 0;
        }
	});

    return resultado
}

const ordenadoNome = ordenar("nome")
console.log(ordenadoNome)
