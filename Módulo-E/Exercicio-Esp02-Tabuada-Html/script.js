let btnClick = document.querySelector("input#btn");
btnClick.addEventListener("click", isClicked);

function isClicked() {  
    let res = document.querySelector("div#res");
    let getNumber = document.querySelector("input#txtNum");

    let num = Number(getNumber.value);
    let mult = 10;

    res.innerHTML = `Tabuada do Número: ${num}`;

    for (let index = 0; index <= mult; index++) {
        res.innerHTML += `<p>${num} x ${index} = ${num*index}`   
    }
}