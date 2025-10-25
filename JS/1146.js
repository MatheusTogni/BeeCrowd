var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let numero = lines.shift()
let items = []

while(numero != 0) {
    for (let i = 1; i <= numero; i++) {
        items.push(i)
        if(items.length == numero) {
            let string = items.join(" ")
            console.log(string)
            items = []
            string = ""
        }
    }
    numero = lines.shift()
}