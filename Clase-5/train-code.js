let n = 2;

if (n === 10) {
    console.log("Es igual a 10")
}

else if (n >= 10 && n <= 20) {
    console.log("Es un valor entre 10 y 20")
}

else {
    console.log("No cumplió condiciones anteriores")
}


if (n <= 10 || n >= 20) {
    console.log("Es un valor menor a 10 ó mayor 20")
}

console.log(`n tiene el valor ${n}`)