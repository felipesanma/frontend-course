// 1. Función recursiva que realice lo siguiente:
//    * Mostrar en consola los números del 1 al 100 de 1 en 1.

function loop_to_n(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}

loop_to_n(100)

function recursive_print_to_100(n) {
    if (n <= 100) {
        console.log(n);
        recursive_print_to_100(n + 1)
    }
}

recursive_print_to_100(1)
//    * Mostrar en consola los números del 1000 al 500 de 2 en 2.

function inverse_loop(n, m) {

    for (let i = n; i >= m; i -= 2) {
        console.log(i)
    }
}

inverse_loop(1000, 500)


function inverse_recusrive_by_2(n) {

    if (n >= 500) {
        console.log(n);
        inverse_recusrive_by_2(n - 2)
    }

}

inverse_recusrive_by_2(1000)

//2. Hacer las funciones que sean necesarias para:
//    * Obtener el promedio de notas de un alumno considerando que la
//    suma de notas debe ser el retorno de una función y el promedio
//    el retorno de otra función. Las notas son: 6,8,9,2,5,10.

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