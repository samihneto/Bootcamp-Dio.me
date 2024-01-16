// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 3.16;
const precoGasolina = 5.37;
const kmPorLitro = 10;
const dist = 920;
const tipoCombustivel = '???';
const litrosConsumidos = dist / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    let valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel === 'Gasolina') {
    let valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    console.log('Não é uma opção válida!')
}

