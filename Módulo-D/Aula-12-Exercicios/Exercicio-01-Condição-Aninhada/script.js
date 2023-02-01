let idade = 33;

console.log(`Sua idade é de ${idade} anos`);

if (idade < 16) {
    console.log(`Não Pode votar, idade minima não atingida...`);
} else if (idade >= 16 && idade < 18 || idade >= 65) {
    console.log(`Voto opcional`)
} else{
    console.log(`Voto Obrigatório`);
}