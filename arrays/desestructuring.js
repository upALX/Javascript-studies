// destructuring

const listOfContents = ['balao', 'abelha',5,6,7,8, ['Alexandre', 'Noronha', 4]]

const [first, second, third, ...alx] = listOfContents

console.log(typeof(alx[2]))

// Mais desestruturação

// Includes - método que verifica de acordo com o item, se esse existe dentro do array. Retorna um boolean.
// IndexOf - encontra o indice de determinado item dentro do array. Retorna um number.

// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
// utilize desestruturação
// todo aluno cadastrado deve ter uma média


const alumni = ['Alexandre', "Alface", "Alorino"]
const grade = [10, 9, 7]

const joinLists = [alumni, grade]

function average(alumniName){

    let indexAlumni = alumni.indexOf(alumniName)

    if (indexAlumni >= 0){
        `Ola ${alumni[indexAlumni]}, te encontramos aqui e estamos verificando a sua nota...`
    }else{
        `Esse usuario nao esta cadastrdo.`
    }

    let alumniGradeAverage = verifyHasAverage(indexAlumni=indexAlumni) 

    const message =  `Sua média foi encontrada e é igual a ${alumniGradeAverage}`
    
    return message
}

function verifyHasAverage(indexAlumni){

    let has_grade = grade[indexAlumni]

    if (has_grade){
        return has_grade
    }
    else{
        return `A nota dessa pessoa não consta no cadastro, pois está como ${has_grade}.`
    }
}

console.log(average('Alexandre'))

console.log(joinLists)

const [names, numbers] = joinLists

console.log(names)
console.log(numbers)
