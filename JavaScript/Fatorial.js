const readline = require('readline-sync');

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const numero = readline.questionInt("Digite um número para calcular o fatorial:");

if (!isNaN(numero)) {
    const resultado = fatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}`);
} else {
    console.log("Por favor, insira um número válido.");
}
