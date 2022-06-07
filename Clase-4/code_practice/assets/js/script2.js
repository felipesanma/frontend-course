// String
const nombre = 'Pipe'
// Number
const edad = 23
// Boolean
const verde = true
// Array
const colores = ["rojo", "negro", "azul"]
// Object
const cliente = {
    name: nombre,
    age: edad,
    like_weed: verde,
    fav_colours: colores,
    address: {
        street: "Usach",
        country: "Chile"
    },
    saludo: function () {
        console.log("Hola")
    }
}

// console.log(nombre, edad, verde)
// console.log(colores)
// console.log(cliente)
// cliente.saludo()
// console.log(cliente.saludo())

function recursive_print_to_100(n) {
    if (n <= 100) {
        console.log(n);
        recursive_print_to_100(n + 1)
    }
}

// recursive_print_to_100(1)

function inverse_recusrive_by_2(n) {

    if (n >= 500) {
        console.log(n);
        inverse_recusrive_by_2(n - 2)
    }

}

// inverse_recusrive_by_2(1000)

function suma_notas(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}


function promedio_notas(array) {
    suma = suma_notas(array)
    return suma / array.length
}

const array = [6, 8, 9, 2, 5, 10]

console.log(promedio_notas(array))