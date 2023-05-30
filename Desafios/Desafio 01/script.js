function calcular(){
    var vel = Number(document.getElementById('txtn').value)
    var res = document.getElementById('res')
    res.innerHTML = `Sua velocidade atual é de ${vel} km/h.`
    if(vel == 0){
        alert('Insira um valor para calcular!')
    } else if (vel > 60){
        res.innerHTML += '<p>Você foi <strong>MULTADO</strong> por excesso de velocidade.'
    } 
    res.innerHTML += '<p>Dirija com cuidado!'

}