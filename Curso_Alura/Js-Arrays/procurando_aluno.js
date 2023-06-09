const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (alunos.includes(aluno)) {
    console.log(`O aluno está cadastrado`);
    const indice = alunos.indexOf(aluno);
    console.log(`${aluno} tem a média ${medias[indice]}`);
  } else {
    console.log("Aluno não encontrado");
  }
}

exibeNomeENota("Caio");
