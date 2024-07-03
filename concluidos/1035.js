var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a =>Number(a))

const [a, b, c, d] = pegarValores(lines.shift())

if ((b > c) && (d > a) && (c + d > a + b) && (c > 0) && (d > 0) && (a % 2 == 0)) {
console.log(`Valores aceitos`)
} else { 
console.log(`Valores nao aceitos`) 
}