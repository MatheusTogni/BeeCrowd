var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let conta = lines.shift().split(" ");
let x1 = parseInt(conta[0]);
let x2 = parseInt(conta[1]);

if (x1 % x2 == 0 || x2 % x1 == 0) 
    console.log('Sao Multiplos');
else 
    console.log('Nao sao Multiplos');