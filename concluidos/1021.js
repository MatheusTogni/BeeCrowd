var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let note = parseFloat(input)

const notas = [100, 50, 20, 10, 5 ,2] ;
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log(`NOTAS:`);
notas.forEach ( e => {
    let totalNotas = parseInt (note / e)
    console.log(`${totalNotas} nota(s) de R$ ${e.toFixed(2)}`)
    note = note % e
})

console.log(`MOEDAS:`);
moedas.forEach ( e => {
    let totalNotas = parseInt (note / e)
    console.log(`${totalNotas} moeda(s) de R$ ${e.toFixed(2)}`)
    note = (note % e) + 0.00001
})