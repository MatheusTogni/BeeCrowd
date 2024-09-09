var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let consumo = parseInt(lines.shift())
let distancia = parseFloat(lines.shift())
let km = (consumo / distancia)

console.log(km.toFixed(3), 'km/l')