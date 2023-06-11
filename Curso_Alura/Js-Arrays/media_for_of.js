const notas = [10, 6.5, 8, 7.5];

soma = 0;

for (const elementos of notas) {
    soma += elementos
}
const media = soma / notas. length
console.log(`A média das notas é ${media}`)