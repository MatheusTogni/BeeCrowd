var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let vendedor = (lines.shift());
let salario = parseFloat(lines.shift())
let vendas = parseFloat(lines.shift())
let bonus 

if (vendas > 0) {
    bonus = vendas * 0.15
} else {
    bonus = 0
}

console.log("TOTAL = R$",(salario + bonus).toFixed(2))


