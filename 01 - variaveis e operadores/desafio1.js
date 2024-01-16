const precoCombustivel = 5.79;
const kmPorLitros = 12;
let dist = 67;

const litrosConsumidos = dist / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));