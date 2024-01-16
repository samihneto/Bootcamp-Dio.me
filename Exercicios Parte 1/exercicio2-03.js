/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento
- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros 10%;
*/

let precoNormal = 100;
let formaPagamento = 2;
const pagamento1 = precoNormal - (precoNormal * 0.10);
const pagamento2 = precoNormal - (precoNormal * 0.15);
const pagamento3 = precoNormal
const pagamento4 = precoNormal + (precoNormal + 0.10); 

if (formaPagamento === 1) {
    console.log(pagamento1);
} else if (formaPagamento === 2) {
    console.log(pagamento2);
} else if (formaPagamento === 3) {
    console.log(pagamento3);
} else if (formapagamento === 4) {
    console.log(pagamento4);
} else {
    console.log('Número inválido!')
}