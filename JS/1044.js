var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseInt(a));
let [a, b] = lenha(lines.shift());

if (a % b === 0 || b % a === 0) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}