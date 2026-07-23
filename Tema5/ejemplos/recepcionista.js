const recepcionista = {
    nombre: '',
    horario: '',
    activo: true,
 
    cobrar(){
        console.log('Realizar cobro')
    },

    constructor(nombre, horario){
        // Inicializar objeto con valores determinados
        this.nombre = 'Valentin'
        this.horario = '7pm-10pm'

        if(this.activo == false){
            alert('El usuario no está activo en el sistema')
            delete this.cobrar
        }

        console.log('Ejecutar constructor')
    }
}
