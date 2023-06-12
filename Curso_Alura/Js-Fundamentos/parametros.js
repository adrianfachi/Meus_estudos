function soma(num1, num2){
    return num1+num2;
}
console.log(soma(1,5))

function nomeIdade(nome, idade){
    return `Seu nome é ${nome} e sua idade é ${idade}`
}

console.log(nomeIdade('Adrian', 17))
function multiplicacao(num1 = 1, num2 = 1){
    return num1*num2
}

console.log(multiplicacao(soma(7,2),soma(1,3)))