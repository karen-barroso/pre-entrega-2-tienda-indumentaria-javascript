const nombre = prompt("Bienvenida a NERAK. ¿Cuál es tu nombre?");

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

productosNERAK.push("Conjunto");

productosNERAK.unshift("Top");

const productoEliminado = productosNERAK.pop();

alert("Se ha eliminado el elemento: " + productoEliminado);
console.log("Se ha eliminado el elemento: " + productoEliminado);

const productoBuscado = prompt(
    "¿Qué prenda querés buscar en el catálogo de NERAK?"
);

const productoBuscadoNormalizado = productoBuscado.trim().toLowerCase();

const catalogoNormalizado = productosNERAK.map(function(producto) {
    return producto.toLowerCase();
});

if (catalogoNormalizado.includes(productoBuscadoNormalizado)) {

    const posicion = catalogoNormalizado.indexOf(productoBuscadoNormalizado);

    console.log(
        productoBuscado +
        " está disponible en el catálogo, en la posición " +
        posicion
    );

    alert(productoBuscado + " está disponible en el catálogo.");

} else {

    console.log(
        productoBuscado +
        " no está disponible en el catálogo."
    );

    alert(
        productoBuscado +
        " no está disponible en el catálogo."
    );
}

productosNERAK.splice(2, 1, "Camisa oversize");

function listarProductos(lista) {

    console.log("--- Catálogo actual de NERAK ---");

    for (const producto of lista) {

        console.log("Producto: " + producto);
    }

    console.log("Total de productos: " + lista.length);
}

listarProductos(productosNERAK);

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

function obtenerPrecio(tipoPrenda) {

    let precio = 0;

    switch (tipoPrenda) {

        case "1":
            precio = 25000;
            break;

        case "2":
            precio = 35000;
            break;

        case "3":
            precio = 45000;
            break;

        case "4":
            precio = 65000;
            break;

        case "5":
            precio = 55000;
            break;

        case "6":
            precio = 55000;
            break;

        case "7":
            precio = 45000;
            break;

        case "8":
            precio = 50000;
            break;

        case "9":
            precio = 75000;
            break;
    }

    return precio;
}

const calcularSubtotal = function(precio, cantidad) {

    return precio * cantidad;
};

const aplicarDescuento = (total) => {

    if (total >= 150000) {

        return total * 0.90;
    }

    return total;
};

for (let i = 1; i <= cantidadPrendas; i++) {

    let tipoPrenda = prompt(
        "Prenda número " + i +
        "\n¿Qué querés comprar?" +
        "\n1. Remera" +
        "\n2. Blusa" +
        "\n3. Camisa" +
        "\n4. Jean" +
        "\n5. Pantalón" +
        "\n6. Vestido" +
        "\n7. Pollera" +
        "\n8. Sweater" +
        "\n9. Campera"
    );

    while (
        tipoPrenda !== "1" &&
        tipoPrenda !== "2" &&
        tipoPrenda !== "3" &&
        tipoPrenda !== "4" &&
        tipoPrenda !== "5" &&
        tipoPrenda !== "6" &&
        tipoPrenda !== "7" &&
        tipoPrenda !== "8" &&
        tipoPrenda !== "9"
    ) {

        alert(
            "Opción no válida. Por favor, elegí una prenda del 1 al 9."
        );

        tipoPrenda = prompt(
            "Prenda número " + i +
            "\n¿Qué querés comprar?" +
            "\n1. Remera" +
            "\n2. Blusa" +
            "\n3. Camisa" +
            "\n4. Jean" +
            "\n5. Pantalón" +
            "\n6. Vestido" +
            "\n7. Pollera" +
            "\n8. Sweater" +
            "\n9. Campera"
        );
    }

    const precio = obtenerPrecio(tipoPrenda);

    const subtotal = calcularSubtotal(precio, 1);

    totalCompra = totalCompra + subtotal;

    console.log(
        "Elegiste una prenda. Precio: $" + precio
    );
}

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