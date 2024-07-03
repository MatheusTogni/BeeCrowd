var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const inicio = require(`fs`).readFileSync(`/dev/stdin`, `utf8`).split(` `)
const a = Number(inicio.shift())
const n = Number(inicio.pop())
let soma = 0

for (let i = 0; i < n; i++) {
    soma += a + i
}
    console.log(soma)