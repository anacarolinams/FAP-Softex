const readline = require('readline-sync');

class Banco {
    constructor(conta, saldo, tipo, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = agencia;
    }

    buscarConta() {
        console.log(`O número da sua conta é: ${this.conta}`);
    }

    buscarSaldo() {
        console.log(`Seu saldo atual é de: R$ ${this.saldo}`);
    }

    deposito(valorDeposito) {
        this.saldo += valorDeposito;
        console.log(`Depósito de R$ ${valorDeposito} realizado com sucesso. Novo saldo: R$ ${this.saldo} /($ ω $)／.`);
    }

    saque(valorSaque) {
        if (valorSaque > this.saldo) {
            console.log("Seu saldo é insuficiente para esta transação °՞(˃̩ᗣ˂̩)՞.");
        } else {
            this.saldo -= valorSaque;
            console.log(`Saque de R$ ${valorSaque} realizado com sucesso. Novo saldo: R$ ${this.saldo} (ノ^‿^)ノ.`);
        }
    }
}

console.log("Bem vindo ao Banco das Fofurinhas! Nossa maior riqueza é um Donut de Chocolate ଘ(੭^ᵕ^)੭");

const conta = readline.question("Digite o numero da sua conta: ");
const saldo = parseFloat(readline.question("Insira o saldo atual da sua conta: "));
const tipo = readline.question("Insira o seu tipo de conta: ");
const agencia = readline.question("Digite o numero da sua agencia: ");

const banco = new Banco(conta, saldo, tipo, agencia);

let sair = false;

do {
    console.log("\nEscolha a opção relacionada à operação que deseja realizar neste momento:");
    console.log("1. Visualizar Conta;");
    console.log("2. Visualizar Saldo;");
    console.log("3. Realizar Depósito;");
    console.log("4. Realizar Saque;");
    console.log("0. Sair.");

    const operacao = parseInt(readline.question("Digite o numero da opcao desejada: "));

    switch (operacao) {
        case 0:
            sair = true;
            console.log("Te desejamos um dia repleto de amor e muitas coisas doces! (๑˘ᵕ˘)･*:..☆");
            break;
        case 1:
            banco.buscarConta();
            break;
        case 2:
            banco.buscarSaldo();
            break;
        case 3:
            const valorDeposito = parseFloat(readline.question("Digite o valor para depósito: "));
            banco.deposito(valorDeposito);
            break;
        case 4:
            const valorSaque = parseFloat(readline.question("Digite o valor para saque: "));
            banco.saque(valorSaque);
            break;
        default:
            console.log("Opção inválida. Digite um número válido.");
    }
} while (!sair);
