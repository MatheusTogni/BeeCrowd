var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const A = lines.shift().split(" ")
const numero = lines.shift().split(" ")
let multiplo2 = 0
let multiplo3 = 0
let multiplo4 = 0
let multiplo5 = 0
for(let i = 0; i < numero.length, i < parseInt(A); i++){
  if(numero[i] % 2 == 0){
    multiplo2++
  }
  if(numero[i] % 3 == 0){
    multiplo3++
  }
  if(numero[i] % 4 == 0){
    multiplo4++
  }
  if(numero[i] % 5 == 0){
    multiplo5++
  }
}
console.log(`${multiplo2} Multiplo(s) de 2`)
console.log(`${multiplo3} Multiplo(s) de 3`)
console.log(`${multiplo4} Multiplo(s) de 4`)
console.log(`${multiplo5} Multiplo(s) de 5`)