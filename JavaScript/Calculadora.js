const readline = require('readline-sync');

let n1 = readline.questionInt("Digite o primeiro valor: ");
let n2 = readline.questionInt("Digite o segundo valor: ");

let operador = readline.question("Digite o operador desejado:\n+ Soma;\n- Subtracao;\n* Multiplicacao;\n/ Divisao:\n");

let sobra;
let resultado;

switch (operador) {
  case '+':
    resultado = n1 + n2;
    break;
  case '-':
    resultado = n1 - n2;
    break;
  case '*':
    resultado = n1 * n2;
    break;
  case '/':
    resultado = n1 / n2; 
    sobra = n1 % n2;
    break;
  default:
    console.log("Operador inválido!");
}

if (operador === "/" && sobra !== undefined) {
  console.log(`Resultado: ${resultado.toFixed(2)}, Sobra: ${sobra.toFixed(2)}`);
} else if (resultado !== undefined) {
  console.log(`Resultado: ${resultado.toFixed(2)}`);
}