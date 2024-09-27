var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [a, b, c] = lenha(lines.shift());

let geral = [a,b,c]
geral.sort()
let geral2 = [a,b,c]

for (let i = 0; i < geral.length; i++) {
    console.log(geral[i])
    console.log(geral2[i])
}