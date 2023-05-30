function variacao(){
    var valoranterior = Number(prompt('Qual era o preço anterior do produto?'))
    var valoratual  = Number(prompt('Qual é o preço atual do produto?'))
    var res = document.getElementById('res')
    var diferença1 = valoratual-valoranterior
    var diferença2 = valoranterior-valoratual
    var aumento = (valoratual/valoranterior-1)*100
    var diminuiu =(valoratual/valoranterior-1)*-100
    var realanterior = valoranterior.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})
    var realatual = valoratual.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})
    var diferença1 = diferença1.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})
    var diferença2 = diferença2.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})
    res.innerHTML = '<h1>Analisando os valores informados'
    res.innerHTML += `<p>O produto custava ${realanterior} e agora custa ${realatual}.`
    if (valoranterior < valoratual){
        res.innerHTML += 'Hoje o produto está mais caro.'
        res.innerHTML += `<p>O preço subiu ${diferença1} em relação ao preço anterior`
        res.innerHTML += `<p>Uma variação de ${aumento}% para cima.`
    } else {
        res.innerHTML += 'Hoje o produto está mais barato.'
        res.innerHTML += `<p> O preço caiu ${diferença2} em relação ao preço anterior`
        res.innerHTML += `<p>Uma variação de ${diminuiu}% para baixo`
    }
}