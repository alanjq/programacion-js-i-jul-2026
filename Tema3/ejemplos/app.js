// Comentario de una línea
const suma = (a, b) => {
    return parseInt(a) + parseInt(b)
}

/* Comentario de dos o más líneas
    más texto
*/
const resta = (a, b) => a - b

/**
 * Multiplica dos números
 * @param {int} a Primer número
 * @param {int} b Segundo número
 * @returns El resultado de la multiplicación
 */
function multiplicacion(a, b) {
    return a * b
}

const division = (a, b) => (a / b)


function calcular() {
    // event solo esta disponible cuando llamamos al evento desde el HTML
    let formulario = event.target.parentElement
    let operacion = formulario.querySelector("[name='operacion']:checked")
    let resultado = 0;

    // Obtener el primer número
    let a = formulario.querySelector('.numero1').value

    // Obtener el segundo número
    let b = formulario.querySelector('.numero2').value

    // Realizar la operación solicitada
    switch(operacion.value){
        case "suma":
            resultado = suma(a, b);
            break;

        case "resta":
            resultado = resta(a, b)
            break;
        
        case "multiplicacion":
            resultado = multiplicacion(a, b)
            break;

        case "division":
            resultado = division(a, b)
            break;
    }

    document.getElementById("resultado").innerText = resultado;
}

/**
 * Activar o desactivar el botón de cálculo según se haya seleccionado o no un radio button
 */
function validarCalculo(){
    let formulario = document.querySelector('form')
    let operacion = formulario.querySelector("[name='operacion']:checked")

    // Desbloquear el botón
    let btnCalcular = document.getElementById("btnCalcular")
    if(operacion != null ){
        btnCalcular.disabled = false
    }else{
        btnCalcular.disabled = true
    }
}
