var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [A, B] = lenha(lines.shift());

switch (A) {
    case 1:
        A = 4.00
        break;
    case 2:
        A = 4.50
        break;
    case 3:
        A = 5.00
        break;
    case 4:
        A = 2.00
        break;
    case 5:
        A = 1.50
        break;
}
console.log('Total: R$', (A * B).toFixed(2))

