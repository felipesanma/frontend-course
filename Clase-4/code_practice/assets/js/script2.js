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

console.log(nombre, edad, verde)
console.log(colores)
console.log(cliente)
cliente.saludo()


