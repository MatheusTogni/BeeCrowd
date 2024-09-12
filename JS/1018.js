var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let valor = lines.shift()
let v100 = 0
let v50 = 0
let v20 = 0
let v10 = 0
let v5 = 0
let v2 = 0
let v1 = 0

console.log(valor)
while (valor >= 100) {
    v100 = v100 + 1;
    valor = valor - 100
}
while (valor >= 50) {
    v50 = v50 + 1;
    valor = valor - 50
}
while (valor >= 20) {
    v20 = v20 + 1;
    valor = valor - 20
}
while (valor >= 10) {
    v10 = v10 + 1;
    valor = valor - 10
}
while (valor >= 5) {
    v5 = v5 + 1;
    valor = valor - 5
}
while (valor >= 2) {
    v2 = v2 + 1;
    valor = valor - 2
}
while (valor >= 1) {
    v1 = v1 + 1;
    valor = valor - 1
}

console.log(v100, 'nota(s) de R$ 100,00')
console.log(v50, 'nota(s) de R$ 50,00')
console.log(v20, 'nota(s) de R$ 20,00')
console.log(v10, 'nota(s) de R$ 10,00')
console.log(v5, 'nota(s) de R$ 5,00')
console.log(v2, 'nota(s) de R$ 2,00')
console.log(v1, 'nota(s) de R$ 1,00')