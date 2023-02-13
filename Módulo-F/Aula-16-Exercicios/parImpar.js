function parImpar (number) {
    if(number % 2 == 0) {
        return `O número ${number} é PAR!`;
    } else {
        return `O número ${number} é IMPAR!`;
    }
}

//----------CHAMANDO SEM VARIAVEL----------
console.log(parImpar(21));

//----------CHAMANDO COM VARIAVEL----------
let numberTest = parImpar(90);
console.log(numberTest);