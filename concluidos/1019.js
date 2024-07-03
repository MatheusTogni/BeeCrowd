var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let n = +lines.shift()

const horas = parseInt(n / 3600)
n = n % 3600

const minutos = parseInt(n / 60)
n = n % 60

console.log(`${horas}:${minutos}:${n}`)



