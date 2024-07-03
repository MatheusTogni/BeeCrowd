var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const numero = lines.shift()
let herois = lines.shift().split(" ")
let x = 0

while(x < numero){
    if(herois[0] == `Thor`){
        console.log(`Y`)
    }
    else{
        console.log(`N`)
    }
    herois = lines.shift().split(" ")
    x++
}