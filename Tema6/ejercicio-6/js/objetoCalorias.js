// Usando programación orientada a objetos
const Tabla = {
    id: 'tabla-calorias',
    tabla: null, // elemento HTML
    cuerpo: null,

    iniciar() {
        this.tabla = document.getElementById(this.id)
        this.cuerpo = this.tabla.querySelector('tbody')
    },

    agregarFila(fila) {
        this.cuerpo.innerHTML += fila
        this.calcularCalorias()
        // this.calularCarbohidratos()  TODO: Calcular
        // this.calcularProteina()      TODO: Calcular
    },

    eliminarFila() {
        let boton = event.target
        if (boton.tagName == "BUTTON") {
            let filaPadre = boton.parentElement.parentElement
            filaPadre.outerHTML = ""
        }

        this.calcularCalorias()
        // this.calularCarbohidratos()  TODO: Calcular
        // this.calcularProteina()      TODO: Calcular
    },

    calcularCalorias(){
        // Calcular totales de la columna Calorías
        let columnaCalorias = Tabla.cuerpo.querySelectorAll("tr td:nth-child(2)")
        let totalCalorias = 0

        columnaCalorias.forEach((c)=>{
            if(!isNaN(c.innerText)){
                totalCalorias += parseInt(c.innerText)
            }
        })
        
        document.getElementById('totalCalorias').innerText = totalCalorias
    }
}

const Formulario = {
    id: 'formulario',

    // campos del formulario
    descripcion: null,
    calorias: null,
    carbohidratos: null,
    proteina: null,
    botonAgregar: null,

    form: null,

    iniciar() {
        let form = document.getElementById('formulario')
        this.form = form
        this.descripcion = form.querySelector('[name="descripcion"]')
        this.calorias = form.querySelector('[name="calorias"]')
        this.carbohidratos = form.querySelector('[name="carbohidratos"]')
        this.proteina = form.querySelector('[name="proteina"]')
        this.botonAgregar = form.querySelector('button')

        this.botonAgregar.addEventListener("click", this.agregar)
    },

    limpiarFormulario() {
        this.descripcion.value = ""
        this.calorias.value = ""
        this.carbohidratos.value = ""
        this.proteina.value = ""
    },

    agregar() {
        let datos = {
            descripcion: Formulario.descripcion.value,
            calorias: Formulario.calorias.value,
            carbohidratos: Formulario.carbohidratos.value,
            proteina: Formulario.proteina.value
        }
        console.log('Formulario', datos)
        // Enviamos los datos del formulario

        let alimento = new Alimento(
            datos.descripcion,
            datos.calorias,
            datos.carbohidratos,
            datos.proteina)

        Tabla.agregarFila(alimento.getHtmlView())
        Formulario.limpiarFormulario()
    },
}

class Alimento {
    descripcion
    _calorias
    _carbohidratos
    _proteina // variable privada

    constructor(descripcion = "", calorias = 0, carbohidratos = 0, proteina = 0) {
        this.descripcion = descripcion
        this._calorias = calorias
        this._carbohidratos = carbohidratos
        this._proteina = proteina
    }

    //#region Proteina
    set proteina(valor) {
        this._proteina = this.validarNumero(valor)
    }
    get proteina() {
        return this._proteina + " %"
    }
    //#endregion

    //#region Carbohidratos
    set carbohidratos(valor) {
        this._carbohidratos = this.validarNumero(valor)
    }
    get carbohidratos() {
        return this._carbohidratos + " carbs"
    }
    //#endregion

    //#region Calorias
    set calorias(valor) {
        this._calorias = this.validarNumero(valor)
    }

    get calorias() {
        return this._calorias
    }
    //#endregion

    // Personalizar la variable proteina para que devuelta % al ser consultada
    validarNumero(valor) {
        // Validar que valor solo tenga números
        if (!isNaN(valor)) {
            return valor
        } else {
            return 0
            console.error("Ingrese un valor númerico")
        }
    }

    getHtmlView() {
        let html = `<tr>
                        <td>${this.descripcion}</td>
                        <td>${this.calorias}</td>
                        <td>${this.carbohidratos}</td>
                        <td>${this.proteina}</td>
                        <td><button type="button" class="bg-transparent border-0 fa fa-trash text-danger"></button></td>
                    </tr>`;

        return html;
    }
}

Tabla.iniciar()
Formulario.iniciar()

// Asignar el evento de eliminar a todos los botones dentro de la tabla
Tabla.cuerpo.addEventListener('click', () => {
    if (event.target.tagName == "BUTTON") {
        Tabla.eliminarFila()
    }
})


// Agregar datos de forma manual
let alimento_1 = new Alimento("Galleta",30, 3, 1)
let alimento_2 = new Alimento("Agua", 40, 2, 4)
let alimento_3 = new Alimento("Chicharrón", 90, 31, 3)
let alimento_4 = new Alimento("Tacos", 80, 13, 3)

Tabla.agregarFila(alimento_1.getHtmlView())
Tabla.agregarFila(alimento_2.getHtmlView())
Tabla.agregarFila(alimento_3.getHtmlView())
Tabla.agregarFila(alimento_4.getHtmlView())
 