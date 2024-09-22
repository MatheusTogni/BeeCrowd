var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let lenha = (line) => line.split(" ").map(a => parseFloat(a));
let [a, b, c, d] = lenha(lines.shift());
let media = ((a * 2) + (b * 3) + (c * 4) + (d * 1)) / 10

if (media >= 7.0) {
    console.log('Media:', media.toFixed(1))
    console.log('Aluno aprovado.')
} else if (media < 5.0) {
    console.log('Media:', media.toFixed(1))
    console.log('Aluno reprovado.')
} else if (media >= 5.0 && media <= 6.9) {
    console.log('Media:', media.toFixed(1))
    console.log('Aluno em exame.')
    let exame = parseFloat(lines.shift())
    console.log('Nota do exame:', exame.toFixed(1))
    let mediafinal = (exame + media) / 2
    if(mediafinal >= 5.0) {
        console.log('Aluno aprovado.')
        console.log('Media final:', mediafinal.toFixed(1))
    } else if (mediafinal <= 4.9) {
        console.log('Aluno reprovado')
        console.log('Media final:', mediafinal.toFixed(1))
    }
}