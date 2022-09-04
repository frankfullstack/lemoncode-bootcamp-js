/**
 * Introducción
 */

const arithmeticOperator = {
    operatorOne: 2,
    operatorTwo: 4,
    operationType: "sum",
};

let result = 0;

if (arithmeticOperator.operationType === "sum") {
    let operatorOne = arithmeticOperator.operatorOne >= 0 ? arithmeticOperator.operatorOne : 0;
    let operatorTwo = arithmeticOperator.operatorTwo >= 0 ? arithmeticOperator.operatorTwo : 0;
    result = operatorOne + operatorTwo;
}

console.log("El resultado de la operación es " + result);

/**
 * Introducción usando aproximación funcional
 */

const operations = {
    sum: (op1, op2) => op1 + op2,
    subtract: (op1, op2) => op1 - op,
    multiply: (op1, op2) => op1 * op,
    divide: (op1, op2) => op1 / op,
}

const arithmeticOperator2 = {
    operatorOne: 2,
    operatorTwo: 4,
    operationType: "sum",
};

let result2 = 0;

let operatorOne = arithmeticOperator.operatorOne >= 0 ? arithmeticOperator.operatorOne : 0;
let operatorTwo = arithmeticOperator.operatorTwo >= 0 ? arithmeticOperator.operatorTwo : 0;

result = operations[arithmeticOperator2.operationType](operatorOne, operatorTwo);

console.log("El resultado de la operación es " + result);

/**
 * Ejercicio 1: Cálculo del IVA
 */

const product = { count: 3, price: 12.55, type: "ropa" };

let getTotal = (product) => {
    return product.count * product.price;
}

console.log("El precio del producto es: ", getTotal(product));

function getVat(product) {
    if (product.count === 0) return 0;
    let iva = 0;
    let ivaFromProductPrice = 0;
    let precio = 0;
    let precioTotal = 0;

    switch (product.type) {
        case "alimentacion":
            iva = 0.10;
            break;
        case "libro":
            iva = 0.04;
            break;
        default:
            iva = 0.21;
            break;
    }

    ivaFromProductPrice = product.price * iva
    precio = product.price + ivaFromProductPrice
    precioTotal = precio

    return precioTotal;
}

const precio = getVat(product);
document.write('El precio  final del producto  \"' + product.type + '\" es de ' + precio.toFixed(3) + ' €');
document.write("</br>")

/**
 * Ejercicio 1: Cálculo del IVA con aproximación funcional
 */

const product2 = { count: 3, price: 12.55, type: "ropa" };

let getTotal2 = (product) => {
    return product.count * product.price;
}

console.log("El precio del producto es: ", getTotal2(product));

const VATS = {
    alimentacion: .10,
    libro: .04,
}

function getVat2(product) {
    if (product.count === 0) return 0;
    let iva = 0;
    let ivaFromProductPrice = 0;
    let precio = 0;
    let precioTotal = 0;

    ivaFromProductPrice = product.price * VATS[product.type] ?? .21
    precio = product.price + ivaFromProductPrice
    precioTotal = precio

    return precioTotal;
}

const precio2 = getVat2(product);
document.write('El precio  final del producto  \"' + product.type + '\" es de ' + precio.toFixed(3) + ' €');
document.write("</br>")

/**
 * Ejercicio 2: Avanzado
 */

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

document.write("El precio total del producto es: ", getTotalVat(product));
document.write("</br>")

function printProductPrice(product) {
    const subtotal = getVat(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;

    document.write("<p>Subtotal: ", subtotal + "€</p>");
    document.write("<p>IVA: ", vat + "€</p>");
    document.write("<p>Total: ", total + "€</p>");
}

printProductPrice(product);

/**
 * Ejercicio 3: Calcular sueldo neto en nómina
 */

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
};

let retencion = 0;

// Actualizado a fecha: 2021

if (empleado.bruto < 12450 ) {
    retencion = .19;
} else if (empleado.bruto >= 12450 && empleado.bruto < 20200 ) {
    retencion = .24;
} else if (empleado.bruto >= 20200 && empleado.bruto < 35200 ) {
    retencion = .30;
} else if (empleado.bruto >= 35200 && empleado.bruto < 60000 ) {
    retencion = .37;
} else {
    retencion = .45;
}

if (empleado.hijos > 0) retencion -= .02

let netoNominaAnual = empleado.bruto - (empleado.bruto * retencion);

let netoNominaMensual = netoNominaAnual / empleado.pagas;

document.write("Sueldo neto en n&oacute;mina: " + netoNominaMensual.toFixed(2) + " EUR");
document.write("</br>")
