const dataPartida = document.getElementById("DataDePartida")
const dataRetorno = document.getElementById("DataDeRetorno")
const dataAtual = new Date
let ano = dataAtual.getFullYear()
let mesMin = dataAtual.getMonth()+1
if(mesMin < 10) {
    mesMin = ("0" + mesMin)
}
let mesMax = dataAtual.getMonth()+3
if(mesMax < 10) {
    mesMax = ("0" + mesMax)
}
let dia = dataAtual.getDate()
if(dia < 10) {
    dia = "0" + dia
}
console.log(mesMax)
console.log(dia)
dataPartida.min = `${ano}-${mesMin}-${dia}`
dataPartida.max = `${ano}-${mesMax}-${dia}`
dataRetorno.min = `${ano}-${mesMin}-${dia}`
dataRetorno.max = `${ano}-${mesMax}-${dia}`
const datas = document.getElementById("datas")

function procurar() {
   if (dataPartida.value == 0 || dataRetorno.value == 0) {
        alert("Por favor, informe os locais no campo abaixo!")
   } else {
        window.location = "RotaDestino.html"
        localStorage.setItem('dataPartida', dataPartida.value)
        localStorage.setItem('dataRetorno', dataRetorno.value)
   }
}