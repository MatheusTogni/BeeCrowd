var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a =>Number(a))

const [codigo, quantidade] = pegarValores(lines.shift())
let valor = 0
let valorfinal = 0

if (codigo == 1) {valor = `4.00`}
else
if (codigo == 2) {valor = `4.50`}
else
if (codigo == 3) {valor = `5.00`}
else
if (codigo == 4) {valor = `2.00`}
else
if (codigo == 5) {valor = `1.50`}

valorfinal = (valor * quantidade)
console.log(`Total: R$`,valorfinal.toFixed(2))