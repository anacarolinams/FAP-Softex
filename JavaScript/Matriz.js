const readline = require('readline-sync');

function mostrarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }
}

const qtdLinhas = readline.questionInt("Informe a quantidade de linhas da matriz:");
const qtdColunas = readline.questionInt("Informe a quantidade de colunas da matriz:");
const matriz = [];

for (let i = 0; i < qtdLinhas; i++) {
    const linha = [];
    for (let j = 0; j < qtdColunas; j++) {
        const valor = readline.questionFloat(`Informe o valor para a posição [${i}][${j}]:`);
        linha.push(valor);
    }
    matriz.push(linha);
}

mostrarMatriz(matriz);
