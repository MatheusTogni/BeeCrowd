var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let dias = +lines.shift()
let anos, meses

anos = parseInt(dias / 365)
dias = dias % 365

meses = parseInt(dias / 30)
dias = dias % 30

let resultado = `${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`

console.log(resultado)