// Ordenação de lista

var listIntergerNumbers = [10,1, 5, 9, 8, 12, 15];

console.log(listIntergerNumbers.sort(numbersComparator))

function numbersComparator(x, y) {
    if(x == y)
        return 0
    if (x < y)
        return -1 
    if (x > y)
        return 1
}

// também pode ser:
// lista.sort((a, b) => a - b);