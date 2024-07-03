var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a =>Number(a))

const [x1, y1] = pegarValores(lines.shift())
const [x2, y2] = pegarValores(lines.shift())

let distancia = (((x2 - x1)**2) + ((y2 - y1)**2))
let distanciaquadrada = (Math.sqrt(distancia))

console.log(distanciaquadrada.toFixed(4))