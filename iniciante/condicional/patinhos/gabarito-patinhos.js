/* gets é a entrada
 */
let n;

while ((n = parseInt(gets())) !== -1) {
    let patinhosNaoVoltaram = n > 0 ? n - 1 : 0; 
    print(patinhosNaoVoltaram);
}
