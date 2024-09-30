var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseInt(a));
let [a, b, c] = lenha(lines.shift());

let geral = [a, b, c];
geral.sort((a, b) => a - b);

for (let i = 0; i < geral.length; i++) {
    console.log(geral[i]);
}

console.log("");
console.log(a);
console.log(b);
console.log(c);