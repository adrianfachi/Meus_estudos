const pessoa = {
    nome: "Luma",
    profissao: "engenheira",
};
console.log(pessoa.nome)//Luma

console.log(pessoa.telefone)//undefined

pessoa.telefone = "51 996105286"

console.log(pessoa.telefone)//51 996105286

pessoa.nome = "Luma Silva"

console.log(pessoa)//valores atualizados

const novaPessoa = {
    nome: "Pedro",
};

//pessoa = novaPessoa   (erro, não pode alterar a const dessa mandeira)

delete novaPessoa.nome

console.log(novaPessoa)//objeto vazio
