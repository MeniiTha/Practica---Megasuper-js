import { Carrito } from "./domain/Carrito.js"
import { DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual } from "./domain/Descuento.js"
import { ItemCarrito } from "./domain/ItemCarrito.js"
import { Producto } from "./domain/Producto.js"

import chalk from "chalk"
import figlet from "figlet"

const p1 = new Producto("Coca", 10)
const carrito = new Carrito()
const item = new ItemCarrito(p1, 2)
const item2 = new ItemCarrito(p1, 3)
item.agregarDescuento(new DescuentoFijo(5))
item.agregarDescuento(new DescuentoPorCantidad(2, 50))
item.agregarDescuento(new DescuentoPorcentual(10))
carrito.agregarItem(item)
carrito.agregarItem(item2)

figlet("MegaSuper", function (err, data){
    if(err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.blue(data));
});

console.log(chalk.blue("El precio total es") + chalk.red(carrito.precioTotal()))