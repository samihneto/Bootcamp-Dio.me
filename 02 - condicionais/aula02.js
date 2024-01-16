const numero = 101;


if (numero === 0 || numero > 100) {
    console.log('O número é inválido')
} else if ((numero % 2) === 0) {
    console.log('Par');
} else {
    console.log('Impar');
}