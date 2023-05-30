function calcular(){
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var n3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length ==0){
        alert('Insira valores para contar!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var ini = Number(n1.value)
        var fim = Number(n2.value)
        var passo = Number(n3.value)
        if (passo <=0) {
            alert('Passo inválido! Considerando passo 1!')
            passo = 1
        }
        if (ini<fim){
            for(var c = ini; c <= fim; c += passo) {
                res.innerHTML += (`${c}\u{1F449}`)
            }
        } else {
            for(var c = ini; c >= fim; c -= passo) {
                res.innerHTML += (`${c}\u{1F449}`)
        }
        

    }
        res.innerHTML += '🏁'
    }
}