function tabuada(){
    var num = Number(document.getElementById('txtn').value)
    var tab = document.getElementById('seltab')
    if(num==0){
        alert('Por favor, digite um número!')
    } else{
        tab.innerHTML = ''
        for(var c=1;c<=10;c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }
    }
}