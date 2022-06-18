function suma_dos_numeros(a, b) {
    return a + b;
}

console.log(suma_dos_numeros(5, 5));

// forEach
const array = [1, 2, 3, 4, 5];
array.forEach((numero, i,) => {
    console.log({ i, numero })
});

const pokemones = ["Pikachu", "Snake", "Ekans"]
pokemones.forEach((pokemon, i) => {
    console.log("pokemones[" + i + "] = " + pokemon);
});