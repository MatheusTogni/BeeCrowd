var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [A, B, C] = lenha(lines.shift());

let coeficiente1;
let coeficiente2;
let delta = (B * B) - 4 * A * C;

if (delta < 0 || A === 0) {
    console.log('Impossivel calcular');
} else {
    coeficiente1 = (-B + Math.sqrt(delta)) / (2 * A);
    coeficiente2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log('R1 = ' + coeficiente1.toFixed(5));
    console.log('R2 = ' + coeficiente2.toFixed(5));
}


