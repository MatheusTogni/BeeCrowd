var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let distancia = lines.shift()
let minutos = (distancia * 2)

console.log(minutos, 'minutos')