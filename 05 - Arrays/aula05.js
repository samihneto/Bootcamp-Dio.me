const notas = [];

notas.push(6.5);
notas.push(7.0);
notas.push(4.4);
notas.push(6.1);
notas.push(3.7);
notas.push(8.0);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(notas, soma, media);