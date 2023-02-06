function timeChange() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();


    let timeRes = document.querySelector("div#txtHr");
    let faixa = document.querySelector("div#faixaDia");
    let imageLoad = document.querySelector("img#imagem");
    let h1 = document.querySelector("h1");
    let footer = document.querySelector("footer");

    timeRes.innerHTML = `<strong>Agora são:</strong> ${horas} Horas, ${minutos} minutos e ${segundos} segundos.`;

    if (horas >= 0 && horas < 5) {
        imageLoad.src = "/Exercicios-Especiais/Exercicio-Hora-do-Dia/imagens/madrugada.png";

        document.body.style.background = "#1a3950ff";

        faixa.innerHTML = "Boa Madrugada";
    } else if (horas >= 5 && horas < 12) {
        imageLoad.src = "/Exercicios-Especiais/Exercicio-Hora-do-Dia/imagens/manhã.png";

        document.body.style.background = "#f7cd96ff";
        h1.style.color = "black";
        footer.style.color = "Black";

        faixa.innerHTML = "Bom Dia";
    } else if (horas >= 12 && horas < 18) {
        imageLoad.src = "/Exercicios-Especiais/Exercicio-Hora-do-Dia/imagens/tarde.png";

        faixa.innerHTML = "Boa Tarde";
    } else {
        imageLoad.src = "/Exercicios-Especiais/Exercicio-Hora-do-Dia/imagens/noite.png";

        document.body.style.background = "#152d37ff"

        faixa.innerHTML = "Boa Noite";
    }


}