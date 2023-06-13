const clientes = require("./clientes.json");

function filtro(clientes) {
	return clientes.filter((cliente) => {
		return (
			cliente.endereco.apartamento &&
			!cliente.endereco.hasOwnProperty("complemento")
		);
	});
}

console.log(filtro(clientes));
