//#region Controles de formulario
let txtNumA = document.querySelector("#txtNumA")
let txtNumB = document.querySelector("#txtNumB")
let btn = document.querySelector("#btnSumar")
let lbl = document.querySelector("#lblResultado")
//#endregion

//#region Variables para la suma
let numA = 0
let numB = 0
let total = 0
//#endregion

//#region EVENTOS
txtNumA.addEventListener("input", function (e) {
    numA = parseInt(e.target.value || 0)
    actualizarResultado()
})

txtNumB.addEventListener("input", function (e) {
    numB = parseInt(e.target.value || 0)
    actualizarResultado()
})

btn.addEventListener("click", function (e) {
    actualizarResultado()
})
//#endregion

// Actualizar el valor dentro de lblResultado
function actualizarResultado() {
    let total = sumar(numA, numB)
    lbl.innerText = total
}

//#region FUNCIONES DE SUMAR
function _sumar(numeroa, numerob) {
    total = numeroa + numerob
    return total;
}

// Función tipo flecha
const sumar = (a, b) => a + b
//#endregion
