const nombre = prompt("Bienvenida a NERAK. ¿Cuál es tu nombre?");

let cantidadPrendas = parseInt(prompt("¿Cuántas prendas querés comprar?"));

while (cantidadPrendas <= 0 || cantidadPrendas > 20 || isNaN(cantidadPrendas)) {

    alert("Por favor, ingresá una cantidad válida de prendas. Podés comprar entre 1 y 20 prendas.");

    cantidadPrendas = parseInt(prompt("¿Cuántas prendas querés comprar?"));
}

let totalCompra = 0;

for (let i = 1; i <= cantidadPrendas; i++) {

    const tipoPrenda = prompt(
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

    if (tipoPrenda === "1") {

        totalCompra = totalCompra + 25000;
        console.log("Elegiste una remera. Precio: $25.000");

    } else if (tipoPrenda === "2") {

        totalCompra = totalCompra + 35000;
        console.log("Elegiste una blusa. Precio: $35.000");

    } else if (tipoPrenda === "3") {

        totalCompra = totalCompra + 45000;
        console.log("Elegiste una camisa. Precio: $45.000");

    } else if (tipoPrenda === "4") {

        totalCompra = totalCompra + 65000;
        console.log("Elegiste un jean. Precio: $65.000");

    } else if (tipoPrenda === "5") {

        totalCompra = totalCompra + 55000;
        console.log("Elegiste un pantalón. Precio: $55.000");

    } else if (tipoPrenda === "6") {

        totalCompra = totalCompra + 55000;
        console.log("Elegiste un vestido. Precio: $55.000");

    } else if (tipoPrenda === "7") {

        totalCompra = totalCompra + 45000;
        console.log("Elegiste una pollera. Precio: $45.000");

    } else if (tipoPrenda === "8") {

        totalCompra = totalCompra + 50000;
        console.log("Elegiste un sweater. Precio: $50.000");

    } else if (tipoPrenda === "9") {

        totalCompra = totalCompra + 75000;
        console.log("Elegiste una campera. Precio: $75.000");

    } else {

        console.log("Opción no válida.");
    }
}

const mensajeFinal =
    "Gracias por comprar en NERAK, " +
    nombre +
    ". El total de tu compra es de $" +
    totalCompra +
    ".";

alert(mensajeFinal);
console.log(mensajeFinal);