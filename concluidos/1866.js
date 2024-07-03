var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const numero = lines.shift()
let n = lines.shift()
let x = false
let i = 0
let s = 0
while (i < numero){
    for(let j = 1; j <= n;j++){
        if (x){
            x = false
            s--
        }
        else{
            s++
            x = true
        }
    }
    x = false
    console.log(s)
    s = 0
    n = lines.shift()
    i++
}