var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let a = +lines.shift()
let b = +lines.shift()
let c = +lines.shift()

let mediaa = (2)
let mediab = (3)
let mediac = (5)
let media = ((a * mediaa + b * mediab + c * mediac) / 10)

console.log(`MEDIA =`,media.toFixed(1))