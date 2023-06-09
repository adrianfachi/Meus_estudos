// tipo de dado com booleanos

//conversão explícita
const numero = 456;
const numeroString = '456'
console.log(numero == numeroString)// var numero virou string
console.log(numero === numeroString)// nada foi alterado e o resultado é false porque são de tipos diferentes
console.log(numero + numeroString)// faz uma concatenação
var resultado = numero + Number(numeroString)
console.log(resultado)// somou os 2 valores

//conversão implícita