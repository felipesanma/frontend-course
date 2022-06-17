/*
1. Mostrar en consola la secuencia de Fibonacci:
        
    a. Entre los números 0 y 1000.

    b. Números pares entre 0 y 1000.
        
    c. Números impares entre 0 y 1000.

*Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase*
*/

function fibonacci_sequence_to(n, cache) {
    cache = cache || {};

    if (cache[n]) {
        return cache[n];
    }
    if (n <= 1) {
        return n;
    }
    return cache[n] = (fibonacci_sequence_to(n - 1, cache) + fibonacci_sequence_to(n - 2, cache));
}

for (let i = 0; i <= 1000; i++) {
    console.log(fibonacci_sequence_to(i))
}
/*
2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
*/

let pokeones = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']

/*
3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo
fuego. 
*/

let pokemones = [
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