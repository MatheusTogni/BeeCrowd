var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let x = lines.shift()
let items = []
let a = 0
let b = 1
let proximo = 0

for (let i = 0; i < x; i++) {
    items.push(a)
    proximo = a + b
    a = b
    b = proximo
}
let newItems = items.join(" ")
console.log(newItems)
