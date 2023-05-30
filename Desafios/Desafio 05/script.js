function bissexto(){
    var ano = Number(prompt('Qual é o ano que você quer verificar?'))/4
    var res = document.getElementById('res')
    if(ano %= 0){
        res.innerHTML = `O ano de ${ano} é <font color="green">BISSEXTO`
    }else{
        alert('ok')
    }
}