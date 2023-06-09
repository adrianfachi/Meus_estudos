const notas = [10, 6, 8, 5.5, 10]
notas.pop()
let soma = 0
for (let pos = 0; pos < notas.length; pos++) {
    soma += notas[pos];
}
const media = soma / notas.length;
console.log(`A média é ${media}.`)
