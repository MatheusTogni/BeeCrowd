var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let a = +lines.shift()
let b = +lines.shift()

let mediaa = (3.5)
let mediab = (7.5)
let media = ((a * mediaa + b * mediab) / 11)

console.log(`MEDIA =`,media.toFixed(5))