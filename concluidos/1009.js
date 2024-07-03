var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let nome = lines.shift()
let salario = +lines.shift()
let vendas = +lines.shift()
let comisao = ((vendas * 0.15) + salario)

console.log(`TOTAL = R$`, comisao.toFixed(2))