const clientes = require("./clientes.json");

function encontrar(chave, valor) {
    return clientes.find((item) => item[chave].includes(valor));
}                     //(clientes[8]["nome"].includes("Kirby")) ---> true, com isso ele retorna o "item", ou seja, clientes[8]

const encontrado = encontrar("nome", "Kirby")
console.log(encontrado)
