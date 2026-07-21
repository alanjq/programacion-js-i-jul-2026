// Crear objetos
let veterinario = {
    nombre: '',
    titulo: '',
    // Crear una función usando function. Sctope: veterinario
    operar: function(){
        console.log("El", this.titulo, this, "va a operar")
    },
    // Crear una función usando método. Scope: veterinario
    inyectar(){
        console.log("El veterinario", this)
    },
    // Crear una función usando arrow functions. Scope: Window
    saludar: () => {
        console.log("Hola, soy el veterinario", this)
    },

    constructor(nombre, titulo){
        if(titulo == ''){
            // no puede operar sin título de veterinario
            delete this.operar
        }
        // Asignamos el nombre al veterinario
        this.nombre = nombre
    }
}

