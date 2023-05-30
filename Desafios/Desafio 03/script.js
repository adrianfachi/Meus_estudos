function calcular(){
    var nome = prompt('Qual é o nome do aluno?')
    var nota1 = prompt(`Primeira nota de ${nome}:`)
    var nota2 = prompt(`Segunda nota de ${nome}:`)
    var res = document.getElementById('res')
    var media = (Number(nota1)+Number(nota2))/2
    res.innerHTML = `<h1>Analisando a situação de ${nome}`
    res.innerHTML += `Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong>`
    if(media >= 6) {
        res.innerHTML += '<p>Com média acima de 6,0, o aluno está <font color="green">aprovado.'
    } else if(media >=3){
        res.innerHTML += '<p>Com média acima de 3,0 e abaixo de 6,0, o aluno está em <font color="orange">recuperação'
    } else {
        res.innerHTML += '<p>Com média abaixo de 3,0, o aluno está <font color="red">reprovado'
    }
}