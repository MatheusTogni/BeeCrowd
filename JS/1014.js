var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let distancia = parseFloat(lines.shift())
let combustivel = lines.shift()
let consumo = (distancia / combustivel)

console.log(consumo.toFixed(3), 'km/l')
