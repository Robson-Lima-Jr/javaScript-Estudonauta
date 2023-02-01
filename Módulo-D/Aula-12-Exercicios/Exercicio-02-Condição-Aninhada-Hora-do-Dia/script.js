let time = new Date();

let horas = time.getHours();
let minutos = time.getMinutes();
let segundos = time.getSeconds();

let horarioAtual = `${horas} Horas : ${minutos} Minutos : ${segundos} Segundos`;

if(horas >= 0 && horas < 5) {
    console.log(`Boa Madrugada, agora são ${horarioAtual}`);
} else if (horas >= 5 && horas < 12){
    console.log(`Bom Dia, agora são ${horarioAtual}`);
} else if (horas >= 12 && horas < 18 ) {
    console.log(`Boa Tarde, agora são ${horarioAtual}`);
} else {
    console.log(`Boa Noite, agora são ${horarioAtual}`);
}