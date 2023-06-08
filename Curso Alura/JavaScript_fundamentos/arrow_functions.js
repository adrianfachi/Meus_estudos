function apresentar(nome) {
    return `seu nome é ${nome}`;
}
//arrow function
const apresentarArrow = nome => `seu nome é ${nome}`; //é igual da function de cima

const soma = (num1, num2) => num1 + num2;

//Arrow function + de 1 linha  de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 >= 10 || num2 >= 10) {
        return `Número muito grande`;
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(9, 7))
