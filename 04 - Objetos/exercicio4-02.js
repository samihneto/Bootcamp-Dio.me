/*
 2) Crie uma classe para representar pessoas.
 Para cada pessoa teremos os atributos nome, peso e altura.
 As pessoas devem ter a capacidade de dizer e valor do seu IMC (IMC = peso / (altura * altura));
 Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75m e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc () {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc () {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do Peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do Peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obesidade');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('José', 80, 1.70);
console.log(jose.calcularImc(), jose.classificarImc());
const samir = new Pessoa('Samir', 103, 1.73);
console.log(samir.calcularImc(), samir.classificarImc());
const victor = new Pessoa('Victor', 89, 1.81);
console.log(victor.calcularImc(), victor.classificarImc());