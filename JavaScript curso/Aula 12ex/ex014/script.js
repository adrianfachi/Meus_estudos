function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora =data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML= `Agora são exatamente ${hora} horas, ${min} minutos e ${seg} segundos.`
    if (hora >=6 && hora<12){
        img.src = 'manha.png'
        document.body.style.background = '#e1cdb6'
    } else if(hora>=12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background ='#879bb3'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#142645'
    }
}