const readline = require('readline-sync')

class OperationStrategy {
  execute(a, b) {}
}

class AdditionStrategy extends OperationStrategy {
  execute(a, b) {
    return a + b;
  }
}

class SubtractionStrategy extends OperationStrategy {
  execute(a, b) {
    return a - b;
  }
}

class MultiplicationStrategy extends OperationStrategy {
  execute(a, b) {
    return a * b;
  }
}

function getUserInput(promptMessage) {
  return readline.questionInt(promptMessage);
}

function calculateWithStrategy() {
  const a = getUserInput("Digite o primeiro número: ");
  const b = getUserInput("Digite o segundo número: ");
  const operation = readline.question("Escolha a operação ( + | - | * ): ");

  let strategy;

  switch (operation) {
    case "+":
      strategy = new AdditionStrategy();
      break;
    case "-":
      strategy = new SubtractionStrategy();
      break;
    case "*":
      strategy = new MultiplicationStrategy();
      break;
    default:
      console.log("Operação inválida");
      return;
  }

  const result = strategy.execute(a, b);
  console.log(`Resultado: ${result}`);
}

calculateWithStrategy();