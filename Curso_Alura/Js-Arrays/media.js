//melhor forma de somar, não precisa mudar o código, so adicionar + notas
const notas = [10, 6.5, 8, 7.5];
let soma = 0;
for (let pos = 0; pos < notas.length; pos++) {
  soma += notas[pos];
}
const media = soma / notas.length;
console.log(media);

//outra forma de fazer, mas tem que mudar o cógigo conforme a quantidade de elementos no array
const notas2 = [10, 6.5, 8, 7.5];
const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;
console.log(media2); //mesemo resultado da outra
