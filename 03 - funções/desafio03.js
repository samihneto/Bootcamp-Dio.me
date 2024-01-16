let precoNormal = 100;
let formaPagamento = 4;
function aplicarDesconto (preco, desconto) {
    precoNovo = preco - (preco * desconto/100);
    return precoNovo;
}

function aplicarJuros (preco, juros) {
    precoNovo = preco + (preco * juros/100);
    return precoNovo;
}

if (formaPagamento === 1) {
    console.log(aplicarDesconto (precoNormal, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto (precoNormal, 15));
} else if (formaPagamento === 3) {
    console.log(aplicarDesconto (precoNormal, 0));
} else if (formaPagamento === 4) {
    console.log(aplicarJuros (precoNormal, 10));
} else {
    console.log('Número inválido!')
}