function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex1 = document.getElementById('mas')
    var fsex2 = document.getElementById('fem')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados novamente!')
    } else if(fsex1.checked) {
            gênero = 'um homem'
            if (idade>=0 && idade<15){
                img.setAttribute('src', 'homemcrianca.png')
            }else if(idade <25){
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade <60){
                img.setAttribute('src','homemadulto.png')
            }else{
                img.setAttribute('src','homemvelho.png')
            }
        } else if (fsex2.checked){
            gênero = 'uma mulher'
            if (idade>=0 && idade<15){
                img.setAttribute('src','mulhercrianca.png')
            }else if(idade <25){
                img.setAttribute('src','mulherjovem.png')
            }else if(idade <60){
                img.setAttribute('src','mulheradulta.png')
            }else{
                img.setAttribute('src','mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }