function fatorialRecursivo (a) {
    if (a == 1) {
        return a;
    } else {
        return a * fatorialRecursivo(a-1);
    }
}

console.log(fatorialRecursivo(7));