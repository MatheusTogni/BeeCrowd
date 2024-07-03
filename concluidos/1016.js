var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');

const input = require("fs").readFileSync("stdin", "utf8");

const qtdMinutos = (60 * input) / 30;

console.log(qtdMinutos + " minutos");