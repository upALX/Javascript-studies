// learn parameters

function soma(numberOne=0, numberTwo=0){
    const resultSoma = numberOne + numberTwo

    return resultSoma
}

function multiplica(functionSoma, numberRandom){
    const resultMultiplica = functionSoma * numberRandom

    return resultMultiplica
}

function divide(somaFunction, multiplyFunction) {
    const resultDivide = multiplyFunction / somaFunction 

    return resultDivide
}

console.log(
    soma(
        numberTwo=5,
        numberOne=5,
    )
)

console.log(
    multiplica(
        functionSoma=soma(5,5),
        numberRandom=4,
    )
)

console.log(
    divide(
        somaFunction=soma(5,5),
        multiplyFunction=multiplica(somaFunction=soma(5,5), numberRandom=4),
    )
)

