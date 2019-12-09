let num = [5,8,2,9,3]
num[5] = 7
num.push(1)
num.sort()

console.log(`Nosso vetor é ${num}`)
console.log(`O tamanho do vetor é ${num.length}`)
for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

//Forma Simplificada!
for(let l in num){
    console.log(`A posição ${l} tem o valor ${num[l]}`)
}

let text = ['Texto1','Texto2']
console.log(text.indexOf('Texto3'))