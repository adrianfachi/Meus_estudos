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

cliente.endereco.push({
  rua: "R. Sete de Abril",
  numero: 323,
  apartamento: true,
  complemento: "ap 901",
});

console.log(cliente.endereco[1].rua);

const apenasApartamento = cliente.endereco.filter(
  (endereco) => endereco.apartamento === false
);

console.log(apenasApartamento);
