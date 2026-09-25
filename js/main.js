const nombre = prompt("Bienvenida a NERAK. ¿Cuál es tu nombre?");

let cantidadPrendas = parseInt(prompt("¿Cuántas prendas querés comprar?"));

while (cantidadPrendas <= 0 || cantidadPrendas > 20 || isNaN(cantidadPrendas)) {

    alert("Por favor, ingresá una cantidad válida de prendas. Podés comprar entre 1 y 20 prendas.");

    cantidadPrendas = parseInt(prompt("¿Cuántas prendas querés comprar?"));
}

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

function obtenerNombrePrenda(tipoPrenda) {

    let nombrePrenda = "";

    switch (tipoPrenda) {

        case "1":
            nombrePrenda = "remera";
            break;

        case "2":
            nombrePrenda = "blusa";
            break;

        case "3":
            nombrePrenda = "camisa";
            break;

        case "4":
            nombrePrenda = "jean";
            break;

        case "5":
            nombrePrenda = "pantalón";
            break;

        case "6":
            nombrePrenda = "vestido";
            break;

        case "7":
            nombrePrenda = "pollera";
            break;

        case "8":
            nombrePrenda = "sweater";
            break;

        case "9":
            nombrePrenda = "campera";
            break;
    }

    return nombrePrenda;
}

let totalCompra = 0;

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

        alert("Opción no válida. Por favor, elegí una prenda del 1 al 9.");

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

    const nombrePrenda = obtenerNombrePrenda(tipoPrenda);

    const subtotal = calcularSubtotal(precio, 1);

    totalCompra = totalCompra + subtotal;

    console.log(
        "Elegiste una " +
        nombrePrenda +
        ". Precio: $" +
        precio
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
        "Tenés un 10% de descuento por superar los $150.000.\n" +
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