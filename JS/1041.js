var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [x, y] = lenha(lines.shift());

if (x > 0 && y > 0) {
    console.log('Q1')
} else if (x < 0 && y > 0) {
    console.log('Q2')
} else if (x > 0 && y < 0) {
    console.log('Q4')
} else if (x < 0 && y < 0) {
    console.log('Q3')
} else if (x > 0 && y == 0) {
    console.log('Eixo X')
} else if (x < 0 && y == 0) {
    console.log('Eixo X')
} else if (x == 0 && y > 0) {
    console.log('Eixo Y')
} else if (x == 0 && y < 0) {
    console.log('Eixo Y')
} else { console.log('Origem') }