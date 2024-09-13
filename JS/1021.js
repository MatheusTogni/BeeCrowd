var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines.shift()) * 100; 
let v100 = 0;
let v50 = 0;
let v20 = 0;
let v10 = 0;
let v5 = 0;
let v2 = 0;
let m1 = 0;
let m050 = 0;
let m025 = 0;
let m010 = 0;
let m005 = 0;
let m001 = 0;

while (valor >= 10000) {
    v100 = v100 + 1;
    valor = valor - 10000;
}
while (valor >= 5000) {
    v50 = v50 + 1;
    valor = valor - 5000;
}
while (valor >= 2000) {
    v20 = v20 + 1;
    valor = valor - 2000;
}
while (valor >= 1000) {
    v10 = v10 + 1;
    valor = valor - 1000;
}
while (valor >= 500) {
    v5 = v5 + 1;
    valor = valor - 500;
}
while (valor >= 200) {
    v2 = v2 + 1;
    valor = valor - 200;
}
while (valor >= 100) {
    m1 = m1 + 1;
    valor = valor - 100;
}
while (valor >= 50) {
    m050 = m050 + 1;
    valor = valor - 50;
}
while (valor >= 25) {
    m025 = m025 + 1;
    valor = valor - 25;
}
while (valor >= 10) {
    m010 = m010 + 1;
    valor = valor - 10;
}
while (valor >= 5) {
    m005 = m005 + 1;
    valor = valor - 5;
}
while (valor >= 1) {
    m001 = m001 + 1;
    valor = valor - 1;
}

console.log('NOTAS:');
console.log(v100, 'nota(s) de R$ 100.00');
console.log(v50, 'nota(s) de R$ 50.00');
console.log(v20, 'nota(s) de R$ 20.00');
console.log(v10, 'nota(s) de R$ 10.00');
console.log(v5, 'nota(s) de R$ 5.00');
console.log(v2, 'nota(s) de R$ 2.00');
console.log('MOEDAS:');
console.log(m1, 'moeda(s) de R$ 1.00');
console.log(m050, 'moeda(s) de R$ 0.50');
console.log(m025, 'moeda(s) de R$ 0.25');
console.log(m010, 'moeda(s) de R$ 0.10');
console.log(m005, 'moeda(s) de R$ 0.05');
console.log(m001, 'moeda(s) de R$ 0.01');
