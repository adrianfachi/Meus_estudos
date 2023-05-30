var num = document.getElementById('txtn')
var res = document.getElementById('res')
var fim = document.getElementById('fim')
var vetores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !=-1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    fim.innerHTML = ''
    var num = Number(document.getElementById('txtn').value)
    var res = document.getElementById('res')
    if(isNumero(num) && !inLista(num, vetores)){
        vetores.push(num)
        let item = document.createElement('option')
        item.text = (`Valor ${num} adicionado.`)
        res.appendChild(item)
    } else {
        alert('Valor invalido ou já encontrado na lista')
    }
    document.getElementById('txtn').value = ``
    document.getElementById('txtn').focus()
}
function finalizar(){
    if(vetores == 0) {
        alert('Adicione valores antes de finalizar!')
    }else{
        var tot = vetores.length
        var maior = vetores[0]
        var menor = vetores[0]
        var soma = 0
        var media = 0
        for(pos in vetores){
            soma += vetores[pos]
            media = soma/tot
            if(vetores[pos] > maior){
                maior = vetores[pos]
            }else{
                menor = vetores[0]
            }
           
            
            
        }
            fim.innerHTML = `<p>Ao todo, temos ${tot} valores cadastrados.`
            fim.innerHTML += `<p>O maior número informado foi ${maior}.`
            fim.innerHTML += `<p>O menor valor informado foi ${menor}.`
            fim.innerHTML += `<p>A soma de todos os valores é ${soma}.`
            fim.innerHTML += `<p>A média dos valores digitados é ${media}.`
    }
    

}