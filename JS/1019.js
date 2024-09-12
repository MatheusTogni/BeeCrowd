var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let tempo = lines.shift()
let hora = 0
let minuto = 0
let segundo = 0

while (tempo > 3600) {
    hora = hora + 1
    tempo = tempo - 3600
}
while (tempo > 60) {
    minuto = minuto + 1
    tempo = tempo - 60
}
segundo = tempo

console.log(hora+':'+minuto+':'+segundo)