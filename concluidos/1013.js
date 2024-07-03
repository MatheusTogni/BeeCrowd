var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let [a, b, c] = input.split(" ").map(item => parseInt(item))

let maiorab = (a + b + Math.abs(a-b)) / 2

let maiorabc = (maiorab + c + Math.abs(maiorab - c)) / 2

console.log(maiorabc +` eh o maior`)