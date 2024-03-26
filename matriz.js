const readlineSync = require('readline-sync');

const matriz = [];
const mediaNotasAlunos = [];

for (let i = 0; i < 2; i++) {
    let notas = [];
    for (let j = 0; j < 4; j++) {
        let nota = readlineSync.questionFloat(`Digite a nota ${j + 1} do aluno ${i + 1}: `);
        notas.push(nota);
    }
    matriz.push(notas);
}

for (let notas of matriz) {
    let soma = notas.reduce((acc, curr) => acc + curr, 0);
    let media = soma / notas.length;
    mediaNotasAlunos.push(media);
}

console.log('Média das notas dos alunos:');
console.table(mediaNotasAlunos);
