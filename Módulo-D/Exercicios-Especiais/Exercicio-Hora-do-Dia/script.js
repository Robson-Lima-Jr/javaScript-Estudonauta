function timeChange() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    let timeRes = document.querySelector("div#txtHr");
    let imageLoad = document.querySelector("div#img");

    let finalRes = `${horas} Horas, ${minutos} minutos e ${segundos}.`;

    

    
}