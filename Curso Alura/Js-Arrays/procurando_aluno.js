const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaAlunosEMedias[0].includes(aluno)) {
    console.log(`O aluno está cadastrado`);
    const indice = listaAlunosEMedias[0].indexOf(aluno);
    console.log(`${aluno} tem a média ${listaAlunosEMedias[1][indice]}`);
  } else {
    console.log("Aluno não encontrado");
  }
}

exibeNomeENota("Ana");
