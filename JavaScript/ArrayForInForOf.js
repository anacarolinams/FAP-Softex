/* Vamos criar um array de objetos pessoa com, no mínimo quatro itens. Cada um deles será composto por quatro propriedades: nome, idade, prodissão e cidade.
Dessa forma, declare os objetos pessoa dentro do array e, depois, desenvolva um código que utilize for in e for of para que todos os objetos e propriedades sejam impressos.*/

const readline = require('readline-sync');
const pessoas = [
    {nome: "Ana",
    idade: 28,
    profissão: "Engenheira",
    cidade: "Portugal"},
    {nome: "Jaislla",
    idade: 28,
    profissão: "Veterinária",
    cidade: "Itália"},
    {nome: "Thayna",
    idade: 29,
    profissão: "Artista",
    cidade: "Taiwan"},
    {nome: "Riquelme",
    idade: 21,
    profissão: "Desenvolvedor",
    cidade: "Londres"}
]

// Com For Of

console.log("Imprimindo com For Of:");
for (const pessoa of pessoas) {
    console.log("Pessoa: ");
    for (const propriedade in pessoa){
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
        console.log("______________________________________________________");
    }   
}

// Com For In

console.log("Imprimindo com For In:");
for (const indice in pessoas) {
    const pessoa = pessoas[indice];
    console.log(`Pessoa ${parseInt(indice) +1}:`)
    for (const propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
        console.log("______________________________________________________");

    }    
}