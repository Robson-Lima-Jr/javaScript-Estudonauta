//Parte 01 - Mostrar o modo simples de Arrays
let base = [10,21,35,78,44,3];

console.log(`------PARTE 01------`);
console.log(base);
console.log(base[0]);
console.log(base[1]);
console.log(base[2]);
console.log(base[3]);
console.log(base[4]);
console.log(base[5]);
console.log(``);

//Parte 02 - Adicionar Valores no Array, mostrando na tela sem aparecer os colchetes e ordenando os valores em ordem numerica
console.log(`------PARTE 02------`);
base[6] = 100;
base.push(87);
base.sort();

console.log(`Os números dentro do Array: ${base}`);
console.log(``);

//Parte 03 - Mostrar Index de determinado valor
console.log(`------PARTE 03------`);
let testIndex = base.indexOf(21);

if(testIndex == -1){
    console.log(`O Index do número não está disponivel no Array`);
} else {
    console.log(`O valor digitado está na posição ${testIndex} (indice), do Array`);
}
console.log(``);

//Parte 04 - Manipulando Arrays com For
console.log(`------PARTE 04------`);

for (let i = 0; i < base.length; i++) {
    console.log(`O Número ${base[i]} está no indice ${i}`);
}
console.log(``);
