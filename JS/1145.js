var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseInt(a));
let [a, b] = lenha(lines.shift());
let items = []
let valor = 0

while(valor < b) {
    items.push(valor += 1)
    if(items.length === a) {
        console.log(items.toString().replace(/,/g, " "))
        items = []
    }
}
