var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let [idItem1, qtdItem1, valorUnitarioItem1] = lines.shift().split(" ");
let [idItem2, qtdItem2, valorUnitarioItem2] = lines.shift().split(" ");
let valor1 = (qtdItem1 * valorUnitarioItem1)
let valor2 = (qtdItem2 * valorUnitarioItem2)
let valortotal = (valor1 + valor2)

console.log("VALOR A PAGAR: R$",valortotal.toFixed(2))