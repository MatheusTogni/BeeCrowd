var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let idade = lines.shift()
let ano = 0
let mes = 0
let dia = 0

while (idade >= 365) {
    ano++
    idade = idade - 365
}
while (idade >= 30) {
    mes++
    idade = idade - 30
}
dia = idade

console.log(ano,'ano(s)')
console.log(mes,'mes(es)')
console.log(dia,'dia(s)')