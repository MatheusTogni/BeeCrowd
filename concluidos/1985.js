var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let numero = lines.shift()
let total = 0
function pegarvalor(code) {
switch (code) {
	
	case 1001:
		return 1.5
	case 1002:
		return 2.5
	case 1003:
		return 3.5
	case 1004:
		return 4.5
	case 1005:
		return 5.5
}
}
for (let i = 0; i < numero; i++) {
let [codigo, quantidade] = lines[i].split(" ").map(Number);
let preço = pegarvalor(codigo) * quantidade
total += preço
}
process.stdout.write(`${total.toFixed(2)}\n`)