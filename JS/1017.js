var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let combustivel = 12
let tempo = lines.shift()
let velocidade = lines.shift()

let litros = ((tempo * velocidade) / combustivel)

console.log(litros.toFixed(3))