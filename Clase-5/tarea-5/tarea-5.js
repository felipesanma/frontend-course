/*
1. Mostrar en consola la secuencia de Fibonacci:
        
    a. Entre los números 0 y 1000.

    b. Números pares entre 0 y 1000.
        
    c. Números impares entre 0 y 1000.

*Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase*
*/


/* primer intento; "nunca me cargó la secuencia hasta del 0 al 1000, moría mi pc"

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
*/

function fibonacci_sequence_to(n, cache) {
    cache = cache || {}

    if (cache[n]) {
        return cache[n]
    }
    if (n <= 1) {
        return n;
    }

    return cache[n] = fibonacci_sequence_to(n - 1, cache) + fibonacci_sequence_to(n - 2, cache);
}
// Para usar secuencia hasta 1000, asignarlo a la variable "cota_superior"
const cota_superior = 100
// 1.a. solución
console.log("Solucion 1.a.")
let fibonacci_seq = {}
for (let i = 0; i <= cota_superior; i++) {
    fibonacci_seq[i] = fibonacci_sequence_to(i);
    console.log(`${i} ==> ${fibonacci_seq[i]}`);
}


// 1.b. solución
console.log("Solucion 1.b. opción 1 números pares del 1 al 1000")
for (let i = 0; i <= cota_superior; i++) {
    if (i % 2 == 0) {
        console.log(`${i} ==> ${fibonacci_seq[i]}`);
    }
}

console.log("Solucion 1.b. opción 2 números pares como resultado de secuencia de fibonacci")
for (let i = 0; i <= cota_superior; i++) {
    if (fibonacci_seq[i] % 2 == 0) {
        console.log(`${i} ==> ${fibonacci_seq[i]}`);
    }
}


// 1.c. solución
console.log("Solucion 1.c. opción 1 números impares del 1 al 1000")
for (let i = 0; i <= cota_superior; i++) {
    if (i % 2 != 0) {
        console.log(`${i} ==> ${fibonacci_seq[i]}`);
    }
}

console.log("Solucion 1.c. opción 2 números impares como resultado de secuencia de fibonacci")
for (let i = 0; i <= cota_superior; i++) {
    if (fibonacci_seq[i] % 2 != 0) {
        console.log(`${i} ==> ${fibonacci_seq[i]}`);
    }
}
/*
2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
*/

const pokemones = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']

// 2. Solución

console.log("Solucion 2")
const pokemones_upper = pokemones.map(pokemon => pokemon.toUpperCase())
console.log(pokemones_upper)

/*
3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo
fuego. 
*/

const pokemones_tipo = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]
// 3. Solución
console.log("Solucion 3")
const pokemones_fuego = pokemones_tipo.filter(pokemon => pokemon.tipo.toLowerCase() == "fuego")
console.log(pokemones_fuego)