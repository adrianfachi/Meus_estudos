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

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if(tipo !== 'object' && tipo !=='function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)}
}