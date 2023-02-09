let btnClick = document.querySelector("input#btn");
btnClick.addEventListener("click", isClicked);

function isClicked() {
    let getNumber = document.querySelector("input#txtNum");
    let addSelectItem = document.querySelector("select#selTab");

    let num = Number(getNumber.value);
    let mult = 10;

    if (getNumber.value.length == 0) {
        window.alert("Sem valor dectado, favor digitar um número")
    } else {
        addSelectItem.innerHTML = "";
        for (let i = 0; i <= mult; i++) {
            let item = document.createElement("option");
            item.text = `${num} x ${i} = ${num * i}`;
            item.value = `tab${i}`;
            addSelectItem.appendChild(item);
        }
    }

}