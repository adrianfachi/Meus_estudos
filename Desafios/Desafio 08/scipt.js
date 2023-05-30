function calcular(){
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var alturaM = altura/100
    var IMC = (peso / (alturaM*alturaM)).toFixed(2)
    var resultado = document.getElementById('res') 
    if(altura.length == 0 || peso.length == 0){
        alert('Insira valores para calcular!')
    } else if(IMC< 16.9){
        resultado.innerHTML = `Seu IMC é ${IMC}, por isso sua classificação é: <strong class="MB">Muito abaixo do peso</strong>.`
    } else if(IMC < 18.4){
        resultado.innerHTML = `Seu IMC é ${IMC}, por isso sua classificação é: <strong class="B">Abaixo do peso</strong>.`
    } else if(IMC < 24.9){
        resultado.innerHTML = `Seu IMC é ${IMC}, por isso sua classificação é: <strong class="N">Peso normal</strong>.`
    } else if (IMC < 29.9){
        resultado.innerHTML = `Seu IMC é ${IMC}, por isso sua classificação é: <strong class="A">Acima do peso</strong>.`
    } else if (IMC < 34.9){
        resultado.innerHTML = `Seu IMC é ${IMC}, por isso sua classificação é: <strong class="OI">Obesidade de grau I</strong>.`
    } else if(IMC < 40){
        resultado.innerHTML = `Seu IMC é ${IMC}, por isso sua classificação é: <strong class="OII">Obesidade de grau II</strong>.`
    } else {
        resultado.innerHTML = `Seu IMC é ${IMC}, por isso sua classificação é: <strong class="OIII">Obesidade de grau III</strong>.`
    }
}