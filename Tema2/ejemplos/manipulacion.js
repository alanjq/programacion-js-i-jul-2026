// Consultar por ID
document.getElementById("lista")

// Consultar por clase css
document.getElementsByClassName("lista-dias")

// Consultar por name
document.getElementsByName("domingo")


// Corregir los días que estan mal
function corregirListas() {
    corregirDomingo()
    corregirMiercoles()
    corregirSabado()
}

function corregirDomingo() {
    // Corregir Domingo
    let domingoMal = document.getElementsByName("domingo")[0]
    let domingoBien = document.getElementsByName("domingo")[1]
    domingoMal.innerText = domingoBien.innerText
    domingoMal.classList.remove("doMingo")
    domingoMal.classList.add("domingo", "corregido")
}

function corregirMiercoles(){
    // Corregir Miércoles usando getElementsByTagName
    let listaDiasSemana = document.getElementsByTagName("ul")[0]
    let listaDiasHabiles = document.getElementsByTagName("ul")[2]

    // Modificar el miércoles en la lista completa
    let miercoles = listaDiasSemana.getElementsByTagName("li")[3]
    miercoles.classList.replace("miércoles", "miercoles")
    miercoles.classList.add("corregido")

    // Dias hábiles
    let miercoles2 = listaDiasHabiles.getElementsByTagName("li")[2]
    miercoles2.classList.replace("miércoles", "miercoles")
    miercoles2.classList.add("corregido")
}

function corregirSabado(){
    // Corregir las clases incorrectas de sábado
    let todosLosSabados = document.querySelectorAll("ul li.sábado")

    todosLosSabados.forEach( (sabado, indice) => {
        if(sabado.innerText != "Sábado"){
            sabado.innerText = "Sábado"
        }

        sabado.classList.replace("sábado", "sabado")
        sabado.classList.add("corregido")
        console.log("Sábado corregido", indice, sabado)
    })
}

function limpiarCorregidos(){
    let corregidos = document.querySelectorAll(".corregido")
    corregidos.forEach( item => item.classList.remove("corregido") )
}
