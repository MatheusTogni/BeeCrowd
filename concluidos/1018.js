var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let note = +lines.shift()

console.log(note)

let TotalNote = parseInt(note / 100)
console.log( TotalNote + " nota(s) de R$ 100,00")
note = note % 100

TotalNote = parseInt(note / 50)
console.log( TotalNote + " nota(s) de R$ 50,00")
note = note % 50

TotalNote = parseInt(note / 20)
console.log( TotalNote + " nota(s) de R$ 20,00")
note = note % 20

TotalNote = parseInt(note / 10)
console.log( TotalNote + " nota(s) de R$ 10,00")
note = note % 10

TotalNote = parseInt(note / 5)
console.log( TotalNote + " nota(s) de R$ 5,00")
note = note % 5

TotalNote = parseInt(note / 2)
console.log( TotalNote + " nota(s) de R$ 2,00")
note = note % 2

TotalNote = parseInt(note / 1)
console.log( TotalNote + " nota(s) de R$ 1,00")
note = note % 1