const leia = require('readline-sync');

let menor21 = 0;
let maior50 = 0;
let contador = 0;


while(contador <= 10) {
    let idade = leia.questionInt("Digite até 10 idades: ")

    if (idade < 0){
        console.log ("\n Idade inválida! Tente novamente.")
        break;
    }

    if (idade < 21){
        menor21++;
    }else if(idade > 50){
        maior50++;
    }

    contador++;

    if (contador === 11){
        console.log("\n Foram inseridas as 10 idades.")
        break
    }
}

console.log(`\n Total de pessoas com menos de 21 anos: ${menor21}`);
console.log(`\n Total de pessoas com mais de 50 anos: ${maior50}`);