var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let A = parseFloat
let raio = parseFloat(lines.shift());

A = 3.14159 * Math.pow(raio, 2);
console.log('A=' + A.toFixed(4));