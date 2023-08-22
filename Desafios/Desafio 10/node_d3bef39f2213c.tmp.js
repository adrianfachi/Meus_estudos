const ladrilhos = [1, 1, 1, 1, 1, 1]

function sobraEnergia(array, k) {
    let e = 100
    let pos = 0
    for (let i = 0; (i+k) % array.length + 1; i++){
        pos += k
        console.log(pos)
        if (array[pos] === 1) {
            e -= 2
        }
        e -= 1
    }
    console.log(e)

}

sobraEnergia(ladrilhos, 1)