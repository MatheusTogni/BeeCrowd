var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [A, B] = lenha(lines.shift());

switch(A) {
    case 1:
        A = 4.00
}

console.log(A)

