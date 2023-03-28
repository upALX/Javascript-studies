// Lern arrow functions

const sumSmallNumbersBiggestTen = (numberOne, numberTwo) => {
    if (numberOne < 10 || numberTwo < 10){
        return `Número 1 "${numberOne}" ou Numero 2 "${numberTwo}" e menor que 10. Digite um número maior que 10.`
    } 
    else{
        resultSum = numberOne + numberTwo

        return resultSum
    }
}

console.log(sumSmallNumbersBiggestTen(11, 10))