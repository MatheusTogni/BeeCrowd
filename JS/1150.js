var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift())
let soma = 0
let atual = x
let count = 0 
let z = Number(lines.shift())
while(z <= x) {
    z = Number(lines.shift())
}
if(z > x) {
    for (let i = 0; soma < z; i++) {
        soma += atual
        atual++
        count++
    }
    console.log(count)
}