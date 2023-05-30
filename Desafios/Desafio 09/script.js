var display = document.getElementById('display');

function insert(num){
    var numero = display.innerHTML;
    display.innerHTML = numero + num;
}

function backspace(){
    var resultado = display.innerHTML;
    display.innerHTML = resultado.substring(0, resultado.length -1);
}

function res(){
    var resultado = display.innerHTML;
    if(resultado){
        display.innerHTML = eval(resultado)
    }else{
        display.innerHTML = "Nada para calcular"
    }
}
