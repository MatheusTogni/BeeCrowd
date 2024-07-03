var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let horas = +lines.shift()
let velocidade = +lines.shift()
let distancia = ((horas * velocidade) / 12)

console.log(distancia.toFixed(3))