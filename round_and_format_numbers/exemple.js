// Arredondamento e formatação de números 



function hourGain(sallary, hoursWorkedMonth) {
    const hourlyWage = (sallary / hoursWorkedMonth)
    
    return hourlyWage.toLocaleString('py-BR', {style: 'currency', currency: 'BRL'})
}

hourWage = hourGain(sallary=3000, hoursWorkedMonth=176)

console.log(hourWage)

// valores monetários