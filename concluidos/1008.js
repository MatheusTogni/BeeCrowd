var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());
let salario = parseInt(lines.shift());
let horas = parseFloat(lines.shift());
let dinheiro = parseFloat

dinheiro = salario * horas

console.log('NUMBER =',numero)
console.log('SALARY = U$',dinheiro.toFixed(2))