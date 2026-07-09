let diasSemana = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

// función
function sumar(numeroA, numeroB){
    let total = numeroA + numeroB
    return total
}

// función tipo flecha =>
const suma = (a, b) => a + b

// quitar días

// delete diasSemana[2]
// delete diasSemana[5]

// diasSemana[1] = undefined

// Revisar los elementos no vacíos
let arregloLimpio = []
const itemsNoVacios = (f) => {
    // verificar que tengan algún valo que no sea vacío o undefined
    if(!!f){
        // Agregamos el elemento al arreglo limpio
        arregloLimpio.push(f)
    }
    return arregloLimpio
}

// let dias = diasSemana.map(itemsNoVacios)

let diasHabiles =  diasSemana.filter(dia => dia.endsWith("s"))
let finesSemana =  diasSemana.filter(dia => !dia.endsWith("s"))
console.log("Días hábiles:", diasHabiles)
console.log("Fines de semana:", finesSemana)
