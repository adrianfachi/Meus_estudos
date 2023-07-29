const dataPartida = localStorage.getItem('dataPartida')
const dataRetorno = localStorage.getItem('dataRetorno')
const dataEscolhidaPartida = `${dataPartida.slice(-2)}/${dataPartida.slice(5, 7)}/${dataPartida.slice(0, 4)}`
const dataEscolhidaRetorno = `${dataRetorno.slice(-2)}/${dataRetorno.slice(5, 7)}/${dataRetorno.slice(0, 4)}`
datas.textContent = `${dataEscolhidaPartida} até ${dataEscolhidaRetorno}`

const selectStates = document.querySelector('#estados')
const selectCities = document.querySelector('#cidades')
const cidadePartida = document.getElementById('CidadePartida')

const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
window.addEventListener('load', async () => {
    const request = await fetch(urlUF)
    const response = await request.json()

    for (const iterator of response) {
        const criaOption = document.createElement('option')
        criaOption.text = iterator.sigla
        selectStates.append(criaOption)
    }
})


selectStates.addEventListener("change", async() => {
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+selectStates.value+'/municipios'
    const request = await fetch(urlCidades)
    const response = await request.json()

    for (const iterator of response) {
        const criaOption = document.createElement('option')
        criaOption.text = iterator.nome
        selectCities.append(criaOption)
        
    }
    
    selectCities.addEventListener('change', () => {
        localStorage.setItem('LocalDestino', `${selectCities.value}, ${selectStates.value}`)
    })

    
})

cidadePartida.addEventListener('change', () => {
    localStorage.setItem('LocalPartida', cidadePartida.value)
})








