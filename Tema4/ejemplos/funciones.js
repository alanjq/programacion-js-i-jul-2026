function calcular(){

}

const sumar = () => {

}

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'C', 'D', 'E', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// eliminar elementos, indicando el índice y la cantidad a eliminar
diasSemana.splice(3,3)


// Usando this
const clase = {
    lista: new Set(),
    etiqueta: null,

    iniciar(){
        console.warn("Inicializar los objetos HTML para clase.")
        this.etiqueta = document.querySelector("#listaAlumnos")
    },

    // Devuelve un elemento HTML con su valor
    crearElemento(nombre, apellido){
        return `<li>${nombre} ${apellido}</li>`;
    },

    agregarAlumno(alumnoNuevo){
        this.lista.add(alumnoNuevo)
        // this.lista.push(alumnoNuevo)
        console.warn("Se agregó el alumno", alumnoNuevo.nombreCompleto())
    },

    actualizarLista(){
        let html = "";

        // Recorrer el arreglo LISTA
        this.lista.forEach( (estudiante)=>{
            html += this.crearElemento(estudiante.nombre, estudiante.apellido)
        })

        // Colocamos el HTML generado para actualizar la vista
        this.etiqueta.innerHTML = html
    }
}

function crearAlumno(){
    let nuevo = {...alumno}
    return nuevo
}

const alumno = {
    // atributos
    nombre: '',
    apellido: '',
    grupo: '',
    calificacion: '',

    // Función usando function
    nombreCompleto: function(){
        return `${this.apellido} ${this.nombre}`;
    },

    // métodos
    registrarse(nombre, apellido){ 
        console.log("El alumno", this.nombreCompleto(), "se acaba de registrar")
    },

    saludar(){
        console.log("Soy", this.nombreCompleto(), "del grupo", this.grupo)
    },

    presentarExamen(){
        console.log("El alumno", this.nombreCompleto(), "del grupo", this.grupo, "obtuvo una calificación de", this.calificacion)
    }

}

const formulario = {
    formulario: null,
    inputNombre: null,
    inputApellido: null,
    btnEnviar: null,
    
    iniciar(){
        // Obtener los controles del HTML
        this.formulario = document.getElementById("formulario")
        this.inputNombre = this.formulario.querySelector("#txtNombre")
        this.inputApellido = this.formulario.querySelector("#txtApellido")
        this.btnEnviar = this.formulario.querySelector("#enviar")

        // Eventos
        this.btnEnviar.addEventListener("click", () => {
            // Crear un alumno
            let alumnoNuevo = crearAlumno()
            alumnoNuevo.nombre = this.inputNombre.value
            alumnoNuevo.apellido = this.inputApellido.value
            alumnoNuevo.registrarse()

            // Vaciar la caja de texto
            this.inputNombre.value = ""
            this.inputApellido.value = ""
            
            // Agregar el alumno a la lista de clase
            clase.agregarAlumno(alumnoNuevo)

            // Actualiza la vista
            clase.actualizarLista()
        })
    }


}

// Inicializar objetos
clase.iniciar()
clase.actualizarLista()

formulario.iniciar()
