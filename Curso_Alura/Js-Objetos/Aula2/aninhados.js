const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["51996105286", "5199028922"],
};

cliente.endereco = {
  rua: "R. Hermínio Guilherme Bozzetto",
  numero: 890,
  apartamento: false,
  complemento: "casa",
};

console.log(cliente.endereco.complemento)
