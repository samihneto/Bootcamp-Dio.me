/*
2/ Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado!
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = 0;

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (i%2===0) {
    pares = pares + 1;
    console.log(numero);
   }

    
}

console.log(`Há ${pares} números pares!`);

const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

/*
console.log(numerosPares);

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);
*/