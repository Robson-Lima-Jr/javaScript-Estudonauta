let btnClick = document.querySelector("input#btn");

btnClick.addEventListener("click", isClicked);


function isClicked() {
    let checkYear = new Date();
    let currentYear = checkYear.getFullYear();

    let born = document.querySelector("input#txtNum");
    let res = document.querySelector("div#res");

    if (born.value.length == 0 || Number(born.value) > currentYear) {
        res.innerHTML = `[ERRO], algum dado não fornecido ou Ano declarado maior que ${currentYear}`;
    } else {
        let age = currentYear - Number(born.value);
        let checkSexVar = document.getElementsByName("checkSex");
        let gen = "";

        let img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (checkSexVar[0].checked) {
            gen = "Homem";

            if (age >= 0 && age <= 13) {
                img.setAttribute("src", "criançaH.png");
            } else if (age < 23) {
                img.setAttribute("src", "jovemH.png")
            } else if (age < 65) {
                img.setAttribute("src", "homem.png");
            } else {
                img.setAttribute("src", "idoso.png");
            }
        } else if (checkSexVar[1].checked) {
            gen = "Mulher";

            if (age >= 0 && age <= 13) {
                img.setAttribute("src", "criançaM.png");
            } else if (age < 23) {
                img.setAttribute("src", "jovemM.png")
            } else if (age < 65) {
                img.setAttribute("src", "mulher.png");
            } else {
                img.setAttribute("src", "idosa.png");
            }

        }
        res.innerHTML = `Detectamos ${gen} com ${age} anos`;
        res.appendChild(img);
    }




}