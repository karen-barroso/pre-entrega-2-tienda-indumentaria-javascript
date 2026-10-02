const nombre = prompt("Bienvenida a NERAK. ¿Cuál es tu nombre?");

// Clase que representa los productos de NERAK
class Producto {
    constructor(id, nombre, categoria, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

    // Método para actualizar el stock cuando se realiza una venta
    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            return true;
        }

        return false;
    }

    // Método para calcular el precio con un descuento
    aplicarDescuento(porcentaje) {
        return this.precio * (1 - porcentaje / 100);
    }
}

// Creación de productos mediante la clase Producto
const remera = new Producto(1, "Remera", "Remeras", 25000, 20);
const blusa = new Producto(2, "Blusa", "Blusas", 35000, 20);
const camisa = new Producto(3, "Camisa", "Camisas", 45000, 20);
const jean = new Producto(4, "Jean", "Jeans", 65000, 20);
const pantalon = new Producto(5, "Pantalón", "Pantalones", 55000, 20);
const vestido = new Producto(6, "Vestido", "Vestidos", 55000, 20);
const pollera = new Producto(7, "Pollera", "Polleras", 45000, 20);
const sweater = new Producto(8, "Sweater", "Sweaters", 50000, 20);
const campera = new Producto(9, "Campera", "Camperas", 75000, 20);

const productosObjetos = [
    remera,
    blusa,
    camisa,
    jean,
    pantalon,
    vestido,
    pollera,
    sweater,
    campera
];

const productosNERAK = [
    "Remera",
    "Blusa",
    "Camisa",
    "Jean",
    "Pantalón",
    "Vestido",
    "Pollera",
    "Sweater",
    "Campera"
];

const preciosNERAK = {
    "Remera": 25000,
    "Blusa": 35000,
    "Camisa": 45000,
    "Jean": 65000,
    "Pantalón": 55000,
    "Vestido": 55000,
    "Pollera": 45000,
    "Sweater": 50000,
    "Campera": 75000
};

// Función para mostrar el catálogo numerado
const mostrarCatalogo = (lista) => {
    let catalogo = "Catálogo de NERAK:\n";
    let numero = 1;

    for (const producto of lista) {
        catalogo += numero + ". " + producto + "\n";
        numero++;
    }

    return catalogo;
};

let opcionCatalogo = prompt(
    "Bienvenida a NERAK, " +
    nombre +
    ".\n\n" +
    "¿Qué querés hacer con el catálogo?\n" +
    "1. Agregar una prenda al final\n" +
    "2. Agregar una prenda al principio\n" +
    "3. Eliminar la última prenda\n" +
    "4. Reemplazar una prenda\n" +
    "5. Continuar con la compra"
);

while (
    opcionCatalogo !== "1" &&
    opcionCatalogo !== "2" &&
    opcionCatalogo !== "3" &&
    opcionCatalogo !== "4" &&
    opcionCatalogo !== "5"
) {
    alert("Opción no válida.");

    opcionCatalogo = prompt(
        "¿Qué querés hacer con el catálogo?\n" +
        "1. Agregar una prenda al final\n" +
        "2. Agregar una prenda al principio\n" +
        "3. Eliminar la última prenda\n" +
        "4. Reemplazar una prenda\n" +
        "5. Continuar con la compra"
    );
}

if (opcionCatalogo === "1") {
    const nuevaPrenda = prompt("¿Qué prenda querés agregar al final?");

    if (nuevaPrenda !== null && nuevaPrenda.trim() !== "") {
        productosNERAK.push(nuevaPrenda.trim());

        alert("Se agregó " + nuevaPrenda.trim() + " al final del catálogo.");
    }

} else if (opcionCatalogo === "2") {
    const nuevaPrenda = prompt("¿Qué prenda querés agregar al principio?");

    if (nuevaPrenda !== null && nuevaPrenda.trim() !== "") {
        productosNERAK.unshift(nuevaPrenda.trim());

        alert("Se agregó " + nuevaPrenda.trim() + " al principio del catálogo.");
    }

} else if (opcionCatalogo === "3") {
    const productoEliminado = productosNERAK.pop();

    alert("Se ha eliminado el elemento: " + productoEliminado);
    console.log("Se ha eliminado el elemento: " + productoEliminado);

} else if (opcionCatalogo === "4") {
    const posicion = parseInt(
        prompt(
            "¿Qué posición querés reemplazar?\n" +
            mostrarCatalogo(productosNERAK)
        )
    );

    if (
        !isNaN(posicion) &&
        posicion >= 1 &&
        posicion <= productosNERAK.length
    ) {
        const nuevoProducto = prompt("¿Por qué prenda querés reemplazarla?");

        if (nuevoProducto !== null && nuevoProducto.trim() !== "") {
            productosNERAK.splice(
                posicion - 1,
                1,
                nuevoProducto.trim()
            );

            alert("El catálogo fue actualizado.");
        }
    }
}

console.log(mostrarCatalogo(productosNERAK));

const productoBuscado = prompt(
    "¿Qué prenda querés buscar en el catálogo de NERAK?"
);

if (productoBuscado === null) {
    console.log("La búsqueda fue cancelada.");

} else {
    const productoBuscadoNormalizado =
        productoBuscado.trim().toLowerCase();

    const catalogoNormalizado = [];

    for (const producto of productosNERAK) {
        catalogoNormalizado.push(producto.toLowerCase());
    }

    if (catalogoNormalizado.includes(productoBuscadoNormalizado)) {
        const posicion =
            catalogoNormalizado.indexOf(productoBuscadoNormalizado);

        alert(
            productoBuscado +
            " está disponible en el catálogo."
        );

        console.log(
            productoBuscado +
            " está disponible en la posición " +
            posicion
        );

    } else {
        alert(
            productoBuscado +
            " no está disponible en el catálogo."
        );

        console.log(
            productoBuscado +
            " no está disponible en el catálogo."
        );
    }
}

// Simulación de compra utilizando los objetos creados con la clase Producto
let cantidadPrendas = parseInt(
    prompt("¿Cuántas prendas querés comprar?")
);

while (
    cantidadPrendas <= 0 ||
    cantidadPrendas > 20 ||
    isNaN(cantidadPrendas)
) {
    alert(
        "Por favor, ingresá una cantidad válida de prendas. Podés comprar entre 1 y 20 prendas."
    );

    cantidadPrendas = parseInt(
        prompt("¿Cuántas prendas querés comprar?")
    );
}

let totalCompra = 0;

for (let i = 1; i <= cantidadPrendas; i++) {
    let seleccion = prompt(
        "Prenda número " +
        i +
        "\n\n" +
        mostrarCatalogo(productosNERAK)
    );

    while (seleccion !== null) {
        const seleccionNormalizada = seleccion.trim().toLowerCase();

        const catalogoNormalizado = [];

        for (const producto of productosNERAK) {
            catalogoNormalizado.push(producto.toLowerCase());
        }

        if (catalogoNormalizado.includes(seleccionNormalizada)) {
            const posicion =
                catalogoNormalizado.indexOf(seleccionNormalizada);

            const productoElegido = productosNERAK[posicion];

            const productoObjeto = productosObjetos.find(
                (producto) =>
                    producto.nombre.toLowerCase() ===
                    productoElegido.toLowerCase()
            );

            if (productoObjeto && productoObjeto.vender(1)) {
                totalCompra = totalCompra + productoObjeto.precio;

                console.log(
                    "Elegiste " +
                    productoObjeto.nombre +
                    ". Precio: $" +
                    productoObjeto.precio
                );

                console.log(
                    "Stock disponible de " +
                    productoObjeto.nombre +
                    ": " +
                    productoObjeto.stock
                );

                break;
            }

            alert("No hay stock disponible de esa prenda.");

        } else {
            alert(
                "Esa prenda no está disponible. Elegí una del catálogo."
            );
        }

        seleccion = prompt(
            "Prenda número " +
            i +
            "\n\n" +
            mostrarCatalogo(productosNERAK)
        );
    }
}

// Función para aplicar el descuento de la compra
const aplicarDescuento = (total) => {
    if (total >= 150000) {
        return total * 0.90;
    }

    return total;
};

const totalConDescuento = aplicarDescuento(totalCompra);

let mensajeFinal;

if (totalConDescuento < totalCompra) {
    mensajeFinal =
        "Gracias por comprar en NERAK, " +
        nombre +
        ".\n" +
        "Total de tu compra: $" +
        totalCompra +
        ".\n" +
        "Tenés un 10% de descuento.\n" +
        "Total final: $" +
        totalConDescuento +
        ".";

} else {
    mensajeFinal =
        "Gracias por comprar en NERAK, " +
        nombre +
        ".\n" +
        "El total de tu compra es de $" +
        totalConDescuento +
        ".";
}

alert(mensajeFinal);
console.log(mensajeFinal);

// Verificación de propiedades y método de descuento de un objeto
console.log(remera);
console.log("Precio de la remera con 10% de descuento: $" + remera.aplicarDescuento(10));