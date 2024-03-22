const leia = require('readline-sync');

let numero;
let somaDosNumeros = 0;


do{
    numero = leia.questionInt("Digite um número: ")

    if(numero !== 0){
        somaDosNumeros += numero;
    }
}while (numero !== 0);

console.log(`A soma dos números positivos digitados é: ${somaDosNumeros}`);