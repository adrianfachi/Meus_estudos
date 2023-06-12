// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy or falsy

// 0 = false
// 1 = true

console.log(0 == false)// true
console.log('' == false)// true
console.log(1 == true)// true
console.log('1' == true)// true

// undefined

// null === vazio ou nada

let minhaVar;
let varNull = null;
console.log(typeof minhaVar)//undefined
console.log(varNull)//null
console.log(typeof varNull)//object

let numero = 3;
let texto = 'Alura'
console.log(typeof numero)//number
console.log(typeof texto)//string