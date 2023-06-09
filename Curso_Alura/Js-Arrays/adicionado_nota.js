const notas = [10, 6, 8]
notas.push(7)
soma = 0;
for (let pos = 0; pos < notas.length; pos++) {
    soma += notas[pos];
}
const media = soma/ notas.length
console.log(media)
