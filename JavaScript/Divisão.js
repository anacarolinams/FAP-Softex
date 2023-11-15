const readline = require('readline-sync');

function calcularDivisao() {
    const numerador = readline.questionFloat('Informe o numerador (um número): ');
    const divisor = readline.questionFloat('Informe o divisor (um número diferente de zero): ');

    try {
        if (isNaN(numerador) || isNaN(divisor)) {
            throw new Error('Por favor, insira números válidos.');
        }

        if (divisor === 0) {
            throw new Error('Não é possível dividir por zero.');
        }

        const resultado = numerador / divisor;
        console.log(`Resultado da divisão: ${resultado}`);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    } finally {
        console.log('Operação concluída.');
    }
}

calcularDivisao();
