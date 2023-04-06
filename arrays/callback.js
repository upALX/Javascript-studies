//exemple callback function with arrow function

const names = ['Alexandre', 'Roberto', 'Josevaldo']

names.forEach((item, index)=> {
    console.log(`The name in array is ${item} and it is on the ${index} position. Anonymous`)
})

// exemple callback function with declarative function

function showElementsAndPositionsIntoArray(item, index){
    console.log(`The name in array is ${item} and it is on the ${index} position. DECLARATIVE`)
}

// never execute the function on callback use, only put as parameter
names.forEach(showElementsAndPositionsIntoArray)

// Mapping - iterator in each item and or index. Map does not overwrite the array.
// You have an alumni thats receive a new point in each grade registred, insert this extra point into the existent grades of this alumni.

const alumniGrades = [5,8,10]

const newAlumniGrades = alumniGrades.map((grade) => {
    return grade + 1 <=10 ? grade + 1 : grade 
})

console.log(`New alumni grades value: ${newAlumniGrades}`)
