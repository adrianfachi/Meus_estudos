const arr = [1, 2, 3, 4, -5]

function somaMaiorEMenor (array) {
    const somas = []
    array.sort((a, b) => a - b)
    let somaMenor = 0
    let somaMaior = 0
    for (let index = 0; index < array.length - 1; index++) {
        somaMenor += array[index]
        
    }
    for (let index = 1; index < array.length; index++) {
        somaMaior += array[index]
        
    }
    somas.push(somaMenor)
    somas.push(somaMaior)
    console.log(somas)

}

somaMaiorEMenor(arr)