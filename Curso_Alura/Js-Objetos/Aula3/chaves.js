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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")) {
    console.error('Erros. É necessário ter um endereço cadastrado')
}
