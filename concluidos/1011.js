var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let raio = +lines.shift()
let formula = (4.0/3)
let pi = (3.14159)
let raio3 = (raio * raio * raio)
let final = (formula * pi * raio3)

console.log(`VOLUME =`, final.toFixed(3))