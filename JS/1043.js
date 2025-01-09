var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [a, b, c] = lenha(lines.shift());

if (a + b > c && a + c > b && b + c > a) {
    console.log('Perimetro =', (a + b + c).toFixed(1))
} else {
    console.log('Area =', ((a + b) * c / 2).toFixed(1))
}