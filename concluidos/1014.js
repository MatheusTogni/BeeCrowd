var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let x = +lines.shift()
let y = +lines.shift()
let gasto = (x / y)

console.log(gasto.toFixed(3),`km/l`)