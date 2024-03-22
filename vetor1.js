const leia = require('readline-sync')

let vetorString = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6,];

let numero = leia.questionInt("Digite o número que deseja pesquisar: ");

let posicao = -1;
let encontrado = false;

for(let indice = 0; indice < vetorString.length; indice++){
    if(vetorString[indice] === numero){
        encontrado = true;
        posicao = indice;
        break;
    }
}

if (encontrado) {
    console.log(`O número ${numero} foi encontrado na posição ${posicao} do vetor.`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}

console.table(vetorString)
