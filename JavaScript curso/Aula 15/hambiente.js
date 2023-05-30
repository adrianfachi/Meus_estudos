var num = [5,8,3,9]
num.push(2)
num.push(7)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nossos valores em ordem crescente são: ${num}`)
/*for(var c= 0; c < num.length; c++){
    console.log(num[c])
}*/
for(var c in num){
    console.log(`A posição ${c} é igual a ${num[c]}`)
}
console.log(num.indexOf())
  