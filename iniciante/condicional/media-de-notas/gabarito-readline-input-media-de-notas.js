const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let somaDasNotas = 0;
let contador = 2;

function recebeNota() {
  rl.question('Digite uma nota entre 0 e 10: ', (notaEntradaConsole) => {
    const nota = parseFloat(notaEntradaConsole);

    if (!isNaN(nota) && 0 <= nota && nota <= 10) { /* Em muitos casos, quando você lê input do usuário, pode receber strings. Então, é importante garantir que a entrada seja convertida para um número antes de realizar operações matemáticas. A função parseFloat() é usada para converter a string em um número de ponto flutuante (float). */
      somaDasNotas += nota;
      contador--;

      if (contador > 0) {
        recebeNota();
      } else {
        calcularMedia();
        rl.close();
      }
    } else {
      console.log('Nota inválida. Insira uma nota válida.');
      recebeNota();
    }
  });
}

function calcularMedia() {
  const media = somaDasNotas / 2;
  console.log('Média: ' + media.toFixed(2));
}

recebeNota();