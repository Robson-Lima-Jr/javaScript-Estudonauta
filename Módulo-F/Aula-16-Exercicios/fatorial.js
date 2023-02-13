function fatorial (num) {
    let resFat = 1;

    for (let i = num; i > 1; i--) {
        resFat *= i;
    } return resFat;
}

console.log(fatorial(5));