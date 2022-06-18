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

// Te prometo que te quiero mucho en 3 segundos

var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Te quiero');
    }, 3000);
});

myPromise.then(function (value) {
    console.log(value);
});