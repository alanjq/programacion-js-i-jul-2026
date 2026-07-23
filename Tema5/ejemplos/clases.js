// Crear objeto a partir de una función
class Humano {
    _nombre
    _apellido

    constructor(nombre){
        this.setNombre(nombre)
    }

    saludar(){
        console.log("Saludos")
    }

    
    setNombre(valor = ""){
        if(valor != ''){
            this._nombre = valor
        }else{
            console.error("El nombre no puede ser vacío")
        }
    }

    getNombre(){
        return this._nombre
    }

}

/*
let h = new Humano()
h.nombre = "Alguien"
h.horario = "7"
h.horario

h.apellido = 'Algo'
h.apellido
*/

let persona = new Humano('Araceli')
persona.getNombre()
persona.setNombre("Alguien más")

class Empleado extends Humano{
    constructor(){
        super()
    }

    idEmpleado
    sucursal

    hora_entrada
    hora_salida

    checarEntrada(){}
    checarSalida(){}
}


class Veterinario extends Empleado {
    constructor(){
        super()
        console.log("Veterinario creado:", this)
    }
}

class Recepcionista extends Empleado {
    vacaciones

    constructor(){
        super()
        this.vacaciones = false
        console.log("Recepcionista creado:", this)
    }
}

let r = new Recepcionista()

class Animal {

}
