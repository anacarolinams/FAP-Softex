class calculadora {
    static subtracao (a, b){
        return a - b;
    }
}

const result = calculadora.subtracao (10, 7);
console.log(`O resultado da sua subtração é de: ${result}`)