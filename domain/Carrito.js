export class Carrito {

    items
    
    constructor() {
        this.items = []
    }

    precioTotal() {
        let total = 0
        for (const item of this.items) {
            total += item.precioFinal()
        }
        return total
    }

    agregarItem(item) {
        this.items.push(item)
    }
}