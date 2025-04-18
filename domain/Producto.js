export class Producto {

    #precioBase

    contructor( nombre, precioBase) {
        this.nombre = nombre
        this.#precioBase = precioBase
    }

    get precioBase() {
        return this.#precioBase
    }

    set precioBase(nuevoPrecio) {
        this.precioBase = nuevoPrecio
    }
}
