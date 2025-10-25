var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift())
let soma = 0
let items = []

while(x > 0) {
    soma = soma + x
    items.push(x)
    x = Number(lines.shift())
}

soma = soma / items.length
console.log(soma.toFixed(2))