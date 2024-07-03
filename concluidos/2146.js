var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let senha = lines.shift()

while(lines.length != 0){
  console.log(`${senha - 1}`)
  senha = lines.shift()
}
