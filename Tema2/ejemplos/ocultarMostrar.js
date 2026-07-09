let selector = document.getElementById("selectorLista")

function mostrarCalendario(){
    // Mostrar todo
    if(selector.value == "todo"){
        mostrarLista()
        ocultarDiasHabiles()
        ocultarFinesSemana()
    }

    // Mostrar Dias habiles
    if(selector.value == "habiles"){
        ocultarLista()
        mostrarDiasHabiles()
        ocultarFinesSemana()
    }

    // Mostrar fines de semana
    if(selector.value == "fines"){
        ocultarLista()
        ocultarDiasHabiles()
        mostrarFinesSemana()
    }
}

// Mostrar y ocultar
const ocultarDiasHabiles = () => document.querySelector('.tarjeta.dias-habiles').hidden = true
const mostrarDiasHabiles = () => document.querySelector('.tarjeta.dias-habiles').hidden = false

const ocultarFinesSemana = () => document.querySelector('.tarjeta.fines-semana').hidden = true
const mostrarFinesSemana = () => document.querySelector('.tarjeta.fines-semana').hidden = false

const ocultarLista = () => document.querySelector('.tarjeta.todo').hidden = true
const mostrarLista = () => document.querySelector('.tarjeta.todo').hidden = false