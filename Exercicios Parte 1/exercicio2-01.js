/*
1) Faça um algoritmo que anote as 3 notas tiradas por um aluno em um semestre da faculdade. Calcule e imprima sua média e sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.

*/

let nota1 = 0;
let nota2 = 5;
let nota3 = 9;

const media = (nota1 + nota2 + nota3)/3;

if (media < 5) {
    console.log(media, 'Reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log(media, 'Recuperação!');
} else {
    console.log(media, 'Aprovado!')
}