let somaDasNotas = 0;
let contador = 0;

do {
    let notaEntradaConsole = parseFloat(gets());

    if (notaEntradaConsole < 0 || notaEntradaConsole > 10) {
        print("nota invalida");
    } else {
        somaDasNotas += notaEntradaConsole;
        contador++;
    }

} while (contador < 2);

let media = somaDasNotas / 2;
console.log("media = " + media.toFixed(2));
