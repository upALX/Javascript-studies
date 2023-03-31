// Slice ou fatiamento

const names = ['Alexandre','Alexandre','Alexandre','Alexandre','Alexandre','Alexandre','Alexandre']

// Esse const é porque o slice não altera o const names

const sliceNames = names.slice(1,3) // pode passar 1 argumento, e ele fatia da posição informada até o final do array. Ou pode passar 2 args, e ele fatia da inicial até a final (1, 3)
// slice retorna um novo array com base no array original, sem modifica-lo. Posso tanto reatribuir a uma nova const para ter os valores fatiados nela.
console.log(sliceNames)

//Splice - remove com base no indice, e se você quiser ele adiciona valores no lugar (adiciona no array original, novos arrays não recebem o valor), e remove de acordo com a quantidade de elementos que você definir - (indice, quantidade de items contando o indice inicial, valor que quiser adicionar- não é required)

const namesSplice = ['Alexandre','Lua','tomas','lola','alx','sedex','Alexandre']

namesSplice.splice(1, 3, 'abobora') // remove a posição 1 até 3, mantendo as demais
console.log(namesSplice)// sub array do array original

//Posso tanto reatribuir a uma nova const para ter os valores fatiados nela.
const sNames = namesSplice.splice(2,2)
console.log(sNames) // novo array
