const { Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual } = require('./domain.js')

const p1 = new Producto("cocacola", 10, 1)
const descuentoFijo = new DescuentoFijo(5)
p1.agregarDescuento(descuentoFijo)
//console.log(p1)
//console.log("El precio final del producto es:" + p1.precioFinal())

const galletitas = new Producto("Galletitas", 20, 2)

const fideos = new Producto("Tallarines", 100, 2)
fideos.agregarDescuento(new DescuentoPorcentual(10))

const carrito = [p1]
carrito.push(galletitas)
carrito.push(fideos)

function aumentarPrecioBaseForEach(productos, monto) {
    productos.forEach(producto => {
        producto.precioBase = producto.precioBase + monto
    })
}

aumentarPrecioBaseForEach(carrito, 10)
//console.log("Coca: " + p1.precioBase)
//console.log("Galletitas: " + galletitas.precioBase)

function aumentarPrecioBaseMap(productos, monto){
    return productos.map(productos =>
        productos.precioBase + monto
    )
}

//const listaPrecios = aumentarPrecioBaseMap(carrito, 10)
//console.log(listaPrecios)

function precioMasALto(productos){
    const precioProductos = productos.map(productos => productos.precioBase)
    return Math.max(...precioProductos) // operador de tres puntos (no recibe una lista), convertimos la lista como elementos variables
}

//console.log(carrito.map(productos => productos.precioBase))
//console.log("El precio mas alto es: " + precioMasALto(carrito))

function productosMasBaratosQue(productos, monto){
    return productos.filter((producto) => producto.precioFinal() < monto) 
}

//console.log(productosMasBaratosQue(carrito, 15))

function obtenerPrecioTotal(productos) {
    return productos.reduce((acumulador, productoSiguiente) => {
        return acumulador + productoSiguiente.precioFinal()
    }, 0)
}

console.log(galletitas.precioFinal)
console.log(p1.precioFinal)
console.log("El precio final del carrito es: " + obtenerPrecioTotal(carrito))

function ordenarLista(productos) {
    productos.sort((p1, p2) => p1.precioFinal() - p2.precioFinal())
}

ordenarLista(carrito)
console.log("La lista ordenada de productos es: " , carrito)