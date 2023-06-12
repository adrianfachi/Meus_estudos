// == --> comparação implícita(compara só o valor)

const numero = 3;
const texto = '3';
console.log(numero == texto)// true

// === --> compação explícita(compara o valor e o tipo de dado)

console.log(numero === texto)// false
console.log(numero === Number(texto))// true

// typeof

console.log(typeof(numero))// number
console.log(typeof(texto))// string

// melhor usar o === para não dar problema no futuro