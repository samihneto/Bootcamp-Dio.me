/*
2) O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5. Abaixo do peso;
- Entre 18.5 e 25. Peso normal;
- Entre 25 e 30. Acima do peso;
- Entre 30 e 40. Obeso;
- Acima de 40. Obesidade Grave;

*/


let pesoKg = 104;
let alturaMetros = 1.73;

const resultadoIMC = pesoKg / Math.pow(alturaMetros,2);

console.log(resultadoIMC);

if (resultadoIMC < 18.5) {
    console.log('Abaixo do Peso');
} else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
    console.log('Peso Normal');
} else if (resultadoIMC >= 25 && resultadoIMC < 30) {
    console.log('Acima do Peso');
} else if (resultadoIMC >= 30 && resultadoIMC < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}