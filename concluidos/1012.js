var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a =>Number(a))

const [A, B, C] = pegarValores(lines.shift())

console.log(`TRIANGULO:`,((A * C) /2).toFixed(3))
console.log(`CIRCULO:`,((C * C) * 3.14159).toFixed(3))
console.log(`TRAPEZIO:`,(((A + B)* C) / 2).toFixed(3))
console.log(`QUADRADO:`,(B * B).toFixed(3))
console.log(`RETANGULO:`,(A *B).toFixed(3))