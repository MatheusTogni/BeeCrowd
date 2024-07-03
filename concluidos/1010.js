var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a =>Number(a))

const [id1, qntPecas1, valorPorPeca1] = pegarValores(lines.shift())
const [id2, qntPecas2, valorPorPeca2] = pegarValores(lines.shift())

const precoAPagar1 = qntPecas1 * valorPorPeca1
const precoAPagar2 = qntPecas2 * valorPorPeca2

let mensagem = `VALOR A PAGAR: R$ ${(precoAPagar1 + precoAPagar2).toFixed(2)}`

console.log(mensagem)