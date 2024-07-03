var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let numero = +lines.shift()
let horas = +lines.shift()
let salario = +lines.shift()

let salariofinal = (horas * salario)

console.log(`NUMBER =`,numero)
console.log(`SALARY = U$`,salariofinal.toFixed(2))