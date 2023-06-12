const cliente = {
    nome: "André",
    idade: 32,
    CPF: "11122233345",
    email: "andre@dominio.com"
}
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`)

console.log(`Os digitos do CPF são ${cliente.CPF.slice(0, 3)}*******${cliente.CPF.substring(10)}.`)