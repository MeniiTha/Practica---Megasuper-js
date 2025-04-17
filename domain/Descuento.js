class DescuentoFijo {
    constructor(valor) {
        this.valor = valor
    }

    valoreDescontado(precioBase,cantidad) {
        return this.valor
    }
}

class DescuentoPorcentual {
    constructor(porcentaje) {
        this.porcentaje
    }
    valoreDescontado(precioBase,_) {
        return precioBase * this.porcentaje / 100
    }
}

class DescuentoPorCantidad {
    // "Tanto descuento en la N unidad"
    constructor(cantidadMinima, porcentaje){
        this.cantidadMinima = cantidadMinima
        this.porcentaje = porcentaje
    }

    valoreDescontado(precioBase, cantidad){
        const vecesRepetido = Math.floor(cantidad / this.cantidadMinima) //Math.floor --> redondea el valor para abajo
        let valoreDescontado = 0
        if (valoreDescontado >= 1){
            valoreDescontado = precioBase * (this.porcentaje / 100) * vecesRepetido
        }
        return valoreDescontado
    }
}

module.exports = { DescuentoFijo, DescuentoPorcentual, DescuentoPorCantidad }
