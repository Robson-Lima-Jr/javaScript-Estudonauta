let btnClick = document.querySelector("input#btn");

btnClick.addEventListener("click", isClicked);


function isClicked() {
    let checkYear = new Date();
    let currentYear = checkYear.getFullYear();

    let born = document.querySelector("input#txtNum");
    let res = document.querySelector("div#res");

    if(born.value.length == 0 || Number(born.value) > currentYear) {
        res.innerHTML = `[ERRO], algum dado não fornecido ou Ano declarado maior que ${currentYear}`;
    } else {
        let age = currentYear - Number(born.value);
        let checkSexVar = document.getElementsByName("checkSex");  
        let gen = "";
        
        if(checkSexVar[0].checked) {
            gen = "Homem";

            if(age >= 0 && age <= 13){

            }else if(age < 23){

            }else if(age < 65) {

            }else {

            }
        }else if (checkSexVar[1].checked) {
            gen = "Mulher";
            
        }
        res.innerHTML = `Detectamos ${gen} com ${age} anos`;
    }
    



}