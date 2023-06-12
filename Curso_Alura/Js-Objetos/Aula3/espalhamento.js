const cliente = {
	nome: "João",
	idade: 24,
	email: "joao@firma.com",
	telefone: ["51996105286", "5199028922"],
};

cliente.endereco = [
	{
		rua: "R. Hermínio Guilherme Bozzetto",
		numero: 890,
		apartamento: false,
		complemento: "casa",
	},
];

function ligaParaCliente(telefoneComercical, telefoneResidencial){
	console.log(`Ligando para ${telefoneComercical}`)
	console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone) 

const encomenda = {
	destinatario: cliente.nome,
	...cliente.endereco[0],
}

console.log(encomenda)