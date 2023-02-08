let btnClick = document.querySelector("input#btn");
btnClick.addEventListener("click", isClicked);

function isClicked() {
    let res = document.querySelector("div#res");
    let getStart = document.querySelector("input#inicio");
    let getEnd = document.querySelector("input#fim");
    let getCont = document.querySelector("input#passo");

    let start = Number(getStart.value);
    let end = Number(getEnd.value);
    let cont = Number(getCont.value);

    if (getStart.value.length == 0 || getEnd.value.length == 0 || getCont.value.length == 0) {
        res.innerHTML = `[ERRO] dados faltando, impossivel resolver`;
        res.innerHTML += `\u{1F6AB}`
    } else {
        res.innerHTML = `<strong>Contando: </strong><br>`
        if (cont <= 0) {
            window.alert("Impossivel prosseguir com o Passo = 0. O valor de passo será automaticamente definido em 1");
            cont = 1;
        }

        if(end > start) {
            for (let index = start; index <= end; index += cont) {
                res.innerHTML += `${index} \u{1F449}`;
            } 
        } else if (start > end){
            for (let index = start; index >= end; index -= cont) {
                res.innerHTML += `${index} \u{1F449}`;
            } 
            }else{
                res.innerHTML += `Impossivel Resolver com valores de Inicio e fim iguais \u{26A0}`
            }res.innerHTML += `\u{2705}`
    }
}