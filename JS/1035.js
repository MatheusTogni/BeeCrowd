var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => +a)
let [A,B,C,D] = lenha(lines.shift())

if (((B > C) && (D > A)) && ((C + D) > (A + B)) && ((C > 0 && D> 0) && (A % 2 === 0))) {
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos')
}