const leia = require("readline-sync");

let pares = 0;
let impares = 0;

for (i = 1; i <= 10; i++) {
    let numero = leia.questionInt(`Digite o ${i} número: `);

    if (numero % 2 === 0) {
        pares++;
    }else {
        impares++;
    }
}

console.log(`Total de números pares :  ${pares}`);
console.log(`Total de números impares :  ${impares}`);
