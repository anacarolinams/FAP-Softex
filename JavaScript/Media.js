const readline = require('readline-sync');

let nomeAluno = readline.question("Digite o nome do aluno: "); // Correção: substituído "preadline" por "readline"
let nota1 = readline.questionFloat("Digite a primeira nota: ");
let nota2 = readline.questionFloat("Digite a segunda nota: ");
let nota3 = readline.questionFloat("Digite a terceira nota: ");

let media = (nota1 + nota2 + nota3) / 3;

console.log("Aluno: " + nomeAluno);
console.log("Média: " + media.toFixed(2));
if (media < 7) {
  console.log("Não foi dessa vez, se prepare para a recuperação :X");
}
if (media == 7) {
  console.log("Você passou por um triz, se esforce mais da próxima :O");
}

// Segunda parte do código

let av1 = readline.questionFloat("Digite a nota da primeira avaliacao: ");
let av2 = readline.questionFloat("Digite a nota da segunda avaliacao: ");

let resultado = 21 -(av1 + av2);

console.log(`Você precisa de ${resultado} para passar na média 7`)
