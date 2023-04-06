// For clássico 

// Sintaxe: primeira expressão é o indice. Ele é executado somente uma vez durante o loop;
// segunda expressão: condição para execução. É executada a cada iteração do loop;
// terceira expressão: executada sempre ao final do bloco de código.

const listNumbers = [100,200,300,400,500,600]

for (let counter = 0; counter < listNumbers.length; counter +=1){
    console.log(`O valor ${listNumbers[counter]} tem o indice de numero ${counter}`)
}

// average with classic for

const quarterGrades = [8,9,10]

let sum = 0

for(let counter = 0; counter < quarterGrades.length; counter +=1){
    
    sum += quarterGrades[counter]
}

const average = (sum / quarterGrades.length)

console.log(average)

// average with FOR OF - IDEAL PARA ARRAYS, ele pega diretamente o valor das coisas. Precisa usar todo o array

const notes = [8,9,10]

let sumOf = 0

for (let nota of notes){
    sumOf += nota 
} 

const averageOf = (sumOf / notes.length)

console.log(`A média com for of é igual a ${average}`)

// Average with FOR EACH - method of array
// o forEach além dos valores ele consegue mexer nos indexes

const notesEach = [5,9,7,3,5,4]

sumEach = 0
notesEach.forEach((note, index)=>{
    sumEach += note 
    
    console.log(`A nota ${note} na posicao ${index} foi adicionada a soma!`)

})

console.log(sumEach)
 
