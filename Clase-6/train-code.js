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


console.log(Math.ceil(4.64))

var paki = {
    nombre: "Pakiman",
    ataque: 101
};
paki.ataque = paki.ataque * 2;

console.log(paki.ataque)

function pakiman(vida) {
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);

console.log(vida)


var variable;
if (variable) {
    console.log("funciona");
}
else {
    console.log("no funciona");
}

var a = 10;
var b = "12";
var c = b + a;
console.log(c)

console.log(c + 1)