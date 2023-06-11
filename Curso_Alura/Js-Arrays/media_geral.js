const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia (notasGerais){                       //1 elemento
    const somaNotasGerais = notasGerais.reduce((acumulador, nota) => nota + acumulador, 0)
    const media = somaNotasGerais / notasGerais.length;
    console.log(`A média da sala é ${media}`)
}

calculaMedia(salaJS)
calculaMedia(salaJava)
calculaMedia(salaPython)
