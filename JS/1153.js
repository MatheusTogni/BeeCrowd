var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let x = lines.shift()
let valor = x
let soma = x
while(valor != 1) {
    valor--
    soma = soma * valor

}
console.log(soma)