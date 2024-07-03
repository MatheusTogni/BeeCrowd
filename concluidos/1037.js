var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let a = +lines.shift();

if ((a >= 0) && (a <= 25.0))
    console.log("Intervalo [0,25]")
else if ((a > 25.0) && (a <= 50.0))
    console.log("Intervalo (25,50]")
else if ((a > 50.0) && (a <= 75.0))
    console.log("Intervalo (50,75]")
else if ((a > 75.0) && (a <= 100))
    console.log("Intervalo (75,100]")
else if ((a < 0) || (a > 100))
    console.log("Fora de intervalo")