var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift())
for (let i = 1; i <= numero; i++) {
    if (i == numero) console.log(`Ho!`)
    else process.stdout.write(`Ho `)
}
