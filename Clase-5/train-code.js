
// Condicionales

let n = 1000;

if (n === 10) {
    console.log("Es igual a 10")
}

else if (n >= 10 && n <= 20) {
    console.log("Es un valor entre 10 y 20")
}

else { }


if (n <= 10 || n >= 20) {
    console.log("Es un valor menor a 10 ó mayor 20")
}

console.log(`n tiene el valor ${n}`)

// Ciclos for
console.time("ciclo for")
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.timeEnd("ciclo for")
const cadena = "Hola"

for (const value of cadena) {
    console.log(value);
}


const personas = [
    { nombre: "Juan", edad: 10 },
    { nombre: "Pepito", edad: 20 },
    { nombre: "Rafaaga", edad: 30 },
    { nombre: "Lupa", edad: 40 },
]

for (const persona of personas) {

    if (persona.edad > 20) {
        console.log(persona.nombre)
    }
}

