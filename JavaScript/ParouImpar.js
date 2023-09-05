// Usando a linguagem JavaScript, crie um código com uma função que determine se um número é par ou ímpar.

const readline = require('readline-sync');

function analisar(valor) {
    if (valor % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

while (true) {
    const input = readline.question("Digite o numero que deseja verificar: ");
    const numero = parseInt(input.trim(), 10);

    if (!isNaN(numero)) { 
        console.log(`O número que você digitou é ${analisar(numero)}.`); 
        break;
    } else {
        console.log(`O ${numero} que digitou nao forneceu valores validos. Tente novamente com um numero decimal.`);
    }
}
