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
}