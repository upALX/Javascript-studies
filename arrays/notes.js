const notes = [7,9, 10]

function sumNotes(notas) {
    total = 0

    for (n in notas) {
        total += n 
    }
    
    return total
}   

console.log(sumNotes(notes))