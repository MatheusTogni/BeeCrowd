var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [a, b, c] = lenha(lines.shift());

let geral = [a,b,c]

geral.sort()
console.log(geral)