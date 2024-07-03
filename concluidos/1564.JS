var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let numero = lines.shift()

while (lines.length != 0){
    if(numero == 0){
        console.log(`vai ter copa!`)
    }
    else{
        console.log(`vai ter duas!`)
    }
    numero = lines.shift()
}


