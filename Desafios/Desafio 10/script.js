const arr = [3, 2, 2, 4, 5, 14]

function contaMenorRepetido(array) {
    let contador = 0
    array.sort((a, b) => a - b)
    for (let index = 0; index < array.length; index++) {
        if(array[index] === array[0]) {
            contador ++
        }
    }
    console.log(contador)
}

contaMenorRepetido(arr)