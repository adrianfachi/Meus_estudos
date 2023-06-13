const dados = require("./cliente.json")

console.log(typeof dados)//object
dados.sobrenome = "da Silva"

console.log(dados)

const clienteEmString = JSON.stringify(dados)
console.log(typeof clienteEmString)

const objetoCliente = JSON.parse(clienteEmString)
console.log(objetoCliente)
