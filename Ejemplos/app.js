let diaSemana = "Lunes"

const MENSAJE_HOY = "El día de hoy es:"
const MENSAJE_MANANA = "Mañana es:"

console.log(MENSAJE_HOY, diaSemana)

diaSemana = "Martes"

console.log(MENSAJE_MANANA, diaSemana)

// Creando funciones
function sumar(numeroA, numeroB){
    const TOTAL = numeroA + numeroB
    const resultado = `La suma de ${numeroA} + ${numeroB} es: ${TOTAL}`;
    console.log(resultado)
    return TOTAL
}

let resultado = sumar(4,1)
console.log("Resultado final:", resultado)